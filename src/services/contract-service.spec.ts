import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ContractService } from './contract-service';
import { ApiService } from './api.service';
import { ContractStatus, ContractType } from '../models/contract-models';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Minimal raw API item matching the backend field names ContractService reads */
function makeRawItem(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id:                'c-1',
    jobNumber:         'JN-100',
    jobTitleName:      'Software Engineer',
    contractTypeId:    ContractType.EmployeeContract,
    contractStatusId:  ContractStatus.Approved,
    employeeName:      'Ali Hassan',
    employeeEmail:     'ali@test.com',
    startDate:         '2024-01-15T00:00:00',
    endDate:           '2025-01-14T00:00:00',
    salary:            5000,
    currency:          'USD',
    jobDescription:    'Backend dev',
    ...overrides,
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('ContractService', () => {
  let service: ContractService;
  let apiSpy: jest.Mocked<Pick<ApiService, 'get' | 'post' | 'delete' | 'getBlob'>>;

  beforeEach(() => {
    apiSpy = {
      get:     jest.fn(),
      post:    jest.fn(),
      delete:  jest.fn(),
      getBlob: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ContractService,
        { provide: ApiService, useValue: apiSpy },
      ],
    });

    service = TestBed.inject(ContractService);
  });

  afterEach(() => jest.clearAllMocks());

  // ── getContracts() ────────────────────────────────────────────────────────

  describe('getContracts()', () => {
    it('calls GET Contract/GetAll with correct page params', (done) => {
      apiSpy.get.mockReturnValue(of({ item: [], totalRows: 0 }));
      service.getContracts(2, 20).subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith(
          'Contract/GetAll',
          expect.objectContaining({ pageNumber: 2, pageSize: 20 }),
        );
        done();
      });
    });

    it('maps contractTypeId 1 → EmployeeContract', (done) => {
      apiSpy.get.mockReturnValue(of({ item: [makeRawItem()], totalRows: 1 }));
      service.getContracts().subscribe(res => {
        expect(res.data[0].contractType).toBe('EmployeeContract');
        done();
      });
    });

    it('maps contractStatusId 3 → Approved', (done) => {
      apiSpy.get.mockReturnValue(of({ item: [makeRawItem()], totalRows: 1 }));
      service.getContracts().subscribe(res => {
        expect(res.data[0].status).toBe('Approved');
        done();
      });
    });

    it('strips T-time from startDate and endDate', (done) => {
      apiSpy.get.mockReturnValue(of({ item: [makeRawItem()], totalRows: 1 }));
      service.getContracts().subscribe(res => {
        expect(res.data[0].startDate).toBe('2024-01-15');
        expect(res.data[0].endDate).toBe('2025-01-14');
        done();
      });
    });

    it('handles alternate backend shape with result/total', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [makeRawItem()], total: 1 }));
      service.getContracts().subscribe(res => {
        expect(res.data).toHaveLength(1);
        expect(res.pagination.totalItems).toBe(1);
        done();
      });
    });

    it('returns empty ApiResponse (status: error) on HTTP failure', (done) => {
      apiSpy.get.mockReturnValue(throwError(() => new Error('Network error')));
      service.getContracts().subscribe(res => {
        expect(res.status).toBe('error');
        expect(res.data).toEqual([]);
        done();
      });
    });

    it('computes pagination correctly', (done) => {
      const items = Array(3).fill(null).map((_, i) => makeRawItem({ id: `c-${i}` }));
      apiSpy.get.mockReturnValue(of({ item: items, totalRows: 25 }));
      service.getContracts(1, 10).subscribe(res => {
        expect(res.pagination).toEqual({
          currentPage: 1, itemsPerPage: 10, totalItems: 25, totalPages: 3,
        });
        done();
      });
    });

    it('omits filter params that are empty strings', (done) => {
      apiSpy.get.mockReturnValue(of({ item: [], totalRows: 0 }));
      service.getContracts(1, 10, { status: '', search: 'ali' }).subscribe(() => {
        const params = (apiSpy.get as jest.Mock).mock.calls[0][1] as Record<string, unknown>;
        expect(params).not.toHaveProperty('status');
        expect(params['search']).toBe('ali');
        done();
      });
    });
  });

  // ── getContractById() ─────────────────────────────────────────────────────

  describe('getContractById()', () => {
    it('calls GET Contract/Get with ContractId param', (done) => {
      apiSpy.get.mockReturnValue(of(makeRawItem()));
      service.getContractById(42).subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('Contract/Get', { ContractId: 42 });
        done();
      });
    });

    it('maps employeeName correctly', (done) => {
      apiSpy.get.mockReturnValue(of(makeRawItem({ employeeName: 'Sara Ahmed' })));
      service.getContractById(1).subscribe(c => {
        expect(c.empoleeOrContractor!.name).toBe('Sara Ahmed');
        done();
      });
    });

    it('maps attachments array', (done) => {
      apiSpy.get.mockReturnValue(of(makeRawItem({
        attachments: [{ fileName: 'doc.pdf', filePath: '/uploads/doc.pdf', fileSize: 2048 }],
      })));
      service.getContractById(1).subscribe(c => {
        expect(c.attachments).toHaveLength(1);
        expect(c.attachments![0].name).toBe('doc.pdf');
        expect(c.attachments![0].size).toBe('2KB');
        done();
      });
    });

    it('returns empty Contract on HTTP failure', (done) => {
      apiSpy.get.mockReturnValue(throwError(() => new Error('404')));
      service.getContractById(999).subscribe(c => {
        expect(c).toEqual({});
        done();
      });
    });
  });

  // ── saveContract() ────────────────────────────────────────────────────────

  describe('saveContract()', () => {
    it('calls POST Contract/Create with the given payload', (done) => {
      apiSpy.post.mockReturnValue(of({ success: true }));
      const payload = { id: 'new', contractTitle: 'Dev' };
      service.saveContract(payload).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('Contract/Create', payload);
        done();
      });
    });
  });

  // ── updateContract() ──────────────────────────────────────────────────────

  describe('updateContract()', () => {
    it('calls POST Contract/Update with the given payload', (done) => {
      apiSpy.post.mockReturnValue(of({ success: true }));
      const payload = { id: 'c-5', status: 'Reviewed' };
      service.updateContract(payload).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('Contract/Update', payload);
        done();
      });
    });
  });

  // ── deleteContract() ──────────────────────────────────────────────────────

  describe('deleteContract()', () => {
    it('calls DELETE Contract/Delete?id=<id>', (done) => {
      apiSpy.delete.mockReturnValue(of(undefined));
      service.deleteContract(7).subscribe(() => {
        expect(apiSpy.delete).toHaveBeenCalledWith('Contract/Delete?id=7');
        done();
      });
    });
  });

  // ── changeStatus() ────────────────────────────────────────────────────────

  describe('changeStatus()', () => {
    it('calls POST Contract/ChangeStatus with correct shape', (done) => {
      apiSpy.post.mockReturnValue(of({ success: true }));
      service.changeStatus(12, ContractStatus.Approved).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('Contract/ChangeStatus', {
          contractId: 12,
          statusId: ContractStatus.Approved,
        });
        done();
      });
    });
  });

  // ── downloadPdf() ─────────────────────────────────────────────────────────

  describe('downloadPdf()', () => {
    it('calls getBlob Report/generate-pdf with numeric ContractId', (done) => {
      const blob = new Blob(['%PDF'], { type: 'application/pdf' });
      apiSpy.getBlob.mockReturnValue(of(blob));
      service.downloadPdf('5').subscribe(result => {
        expect(apiSpy.getBlob).toHaveBeenCalledWith('Report/generate-pdf', { ContractId: 5 });
        expect(result).toBeInstanceOf(Blob);
        done();
      });
    });
  });
});
