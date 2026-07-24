import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HrService } from './hr-service';
import { ApiService } from './api.service';
import { OrderStatus } from '../models/hr-models';

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeHRListItem(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id:           1,
    contractId:   10,
    employeeName: 'Ali Hassan',
    jobTitle:     'Developer',
    salary:       4000,
    currency:     'USD',
    ...overrides,
  };
}

function makeOrderRequestDto(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id:                    100,
    requestingEmployeeId:  'emp-1',
    employee: { employeeName: 'Sara Ahmed' },
    leaveTypeId:           1,
    leaveType:             { nameEn: 'Annual Leave' },
    orderTypeId:           2,
    orderType:             { nameEn: 'Leave' },
    startDate:             '2024-03-01',
    endDate:               '2024-03-05',
    orderStatus:           OrderStatus.Pending,
    createDate:            '2024-02-20',
    contractId:            10,
    totalDays:             5,
    ...overrides,
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('HrService', () => {
  let service: HrService;
  let apiSpy: jest.Mocked<Pick<ApiService, 'get' | 'post' | 'delete'>>;

  beforeEach(() => {
    apiSpy = { get: jest.fn(), post: jest.fn(), delete: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        HrService,
        { provide: ApiService, useValue: apiSpy },
      ],
    });

    service = TestBed.inject(HrService);
  });

  afterEach(() => jest.clearAllMocks());

  // ── getHRList() ───────────────────────────────────────────────────────────

  describe('getHRList()', () => {
    it('calls GET HR/GetAll', (done) => {
      apiSpy.get.mockReturnValue(of({ total: 0, result: [] }));
      service.getHRList().subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('HR/GetAll');
        done();
      });
    });

    it('returns total and result array', (done) => {
      const item = makeHRListItem();
      apiSpy.get.mockReturnValue(of({ total: 1, result: [item] }));
      service.getHRList().subscribe(res => {
        expect(res.total).toBe(1);
        expect(res.result).toHaveLength(1);
        done();
      });
    });

    it('defaults total to 0 and result to [] on empty response', (done) => {
      apiSpy.get.mockReturnValue(of({}));
      service.getHRList().subscribe(res => {
        expect(res.total).toBe(0);
        expect(res.result).toEqual([]);
        done();
      });
    });
  });

  // ── getHRDetails() ────────────────────────────────────────────────────────

  describe('getHRDetails()', () => {
    it('calls GET HR/GetByIdHRDetails with contractId param', (done) => {
      apiSpy.get.mockReturnValue(of({ contractId: 5, employeeName: 'Test', vacationDays: 20 }));
      service.getHRDetails(5).subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('HR/GetByIdHRDetails', { contractId: 5 });
        done();
      });
    });

    it('maps exact backend field names: vacationDays, spentVacations, restVacations', (done) => {
      const raw = {
        contractId:    10,
        employeeName:  'Employee',
        vacationDays:  30,
        spentVacations: 10,
        restVacations: 20,
        orderList:     [],
      };
      apiSpy.get.mockReturnValue(of(raw));
      service.getHRDetails(10).subscribe(detail => {
        expect(detail.vacationDays).toBe(30);
        expect(detail.spentVacations).toBe(10);
        expect(detail.restVacations).toBe(20);
        done();
      });
    });

    it('maps jobTitleName → jobTitle when jobTitle is absent', (done) => {
      apiSpy.get.mockReturnValue(of({
        contractId:   10,
        employeeName: 'Test',
        jobTitleName: 'Engineer',
      }));
      service.getHRDetails(10).subscribe(detail => {
        expect(detail.jobTitle).toBe('Engineer');
        done();
      });
    });

    it('maps profileImagePath → avatarUrl when avatarUrl absent', (done) => {
      apiSpy.get.mockReturnValue(of({
        contractId:        10,
        employeeName:      'Test',
        profileImagePath:  '/images/avatar.png',
      }));
      service.getHRDetails(10).subscribe(detail => {
        expect(detail.avatarUrl).toBe('/images/avatar.png');
        done();
      });
    });

    it('defaults orderList, teamList, contractTasks to [] when absent', (done) => {
      apiSpy.get.mockReturnValue(of({ contractId: 10, employeeName: 'Test' }));
      service.getHRDetails(10).subscribe(detail => {
        expect(detail.orderList).toEqual([]);
        expect(detail.teamList).toEqual([]);
        expect(detail.contractTasks).toEqual([]);
        done();
      });
    });
  });

  // ── getAllLeaveRequests() ──────────────────────────────────────────────────

  describe('getAllLeaveRequests()', () => {
    it('calls GET OrderRequest/GetAll', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [] }));
      service.getAllLeaveRequests().subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('OrderRequest/GetAll');
        done();
      });
    });

    it('handles wrapped shape { total, result }', (done) => {
      apiSpy.get.mockReturnValue(of({ total: 1, result: [makeOrderRequestDto()] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list).toHaveLength(1);
        done();
      });
    });

    it('handles flat array shape', (done) => {
      apiSpy.get.mockReturnValue(of([makeOrderRequestDto(), makeOrderRequestDto()]));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list).toHaveLength(2);
        done();
      });
    });

    it('maps employeeName from employee.employeeName', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [makeOrderRequestDto()] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list[0].employeeName).toBe('Sara Ahmed');
        done();
      });
    });

    it('maps leaveType.nameEn → leaveTypeName', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [makeOrderRequestDto()] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list[0].leaveTypeName).toBe('Annual Leave');
        done();
      });
    });

    it('maps createDate → createdAt (backend field is createDate)', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [makeOrderRequestDto({ createDate: '2024-02-20' })] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list[0].createdAt).toBe('2024-02-20');
        done();
      });
    });

    it('maps totalDays as number', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [makeOrderRequestDto({ totalDays: '3' })] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list[0].totalDays).toBe(3);
        done();
      });
    });

    it('returns [] when result is empty', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [] }));
      service.getAllLeaveRequests().subscribe(list => {
        expect(list).toEqual([]);
        done();
      });
    });
  });

  // ── getLeaveRequests() alias ──────────────────────────────────────────────

  describe('getLeaveRequests()', () => {
    it('delegates to getAllLeaveRequests() (same GET call)', (done) => {
      apiSpy.get.mockReturnValue(of({ result: [] }));
      service.getLeaveRequests().subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('OrderRequest/GetAll');
        done();
      });
    });
  });

  // ── getLeaveRequest() ─────────────────────────────────────────────────────

  describe('getLeaveRequest()', () => {
    it('calls GET OrderRequest/Get with id param', (done) => {
      apiSpy.get.mockReturnValue(of({}));
      service.getLeaveRequest(42).subscribe(() => {
        expect(apiSpy.get).toHaveBeenCalledWith('OrderRequest/Get', { id: 42 });
        done();
      });
    });
  });

  // ── Typed create methods ──────────────────────────────────────────────────

  describe.each([
    ['createLeaveRequest',       'OrderRequest/CreateLeave',              { contractId: 1, leaveTypeId: 1 }],
    ['createOverTime',           'OrderRequest/CreateOverTime',           { contractId: 1, extraHours: 2 }],
    ['createBusinessTrip',       'OrderRequest/CreateBusinessTrip',       { contractId: 1, destination: 'Cairo' }],
    ['createCourse',             'OrderRequest/CreateCourse',             { contractId: 1, courseTitle: 'AWS' }],
    ['createServiceCertificate', 'OrderRequest/CreateServiceCertificate', { contractId: 1 }],
    ['createOther',              'OrderRequest/CreateOther',              { contractId: 1, description: 'Other' }],
  ] as const)('%s()', (method, endpoint, payload) => {
    it(`calls POST ${endpoint}`, (done) => {
      apiSpy.post.mockReturnValue(of(undefined));
      (service as any)[method](payload).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith(endpoint, payload);
        done();
      });
    });
  });

  // ── changeOrderStatus() ───────────────────────────────────────────────────

  describe('changeOrderStatus()', () => {
    it('calls POST OrderRequest/ChangeStatus with payload', (done) => {
      apiSpy.post.mockReturnValue(of(undefined));
      const payload = { orderId: 10, statusId: OrderStatus.Approved };
      service.changeOrderStatus(payload).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('OrderRequest/ChangeStatus', payload);
        done();
      });
    });
  });

  // ── updateLeaveRequest() ──────────────────────────────────────────────────

  describe('updateLeaveRequest()', () => {
    it('calls POST OrderRequest/Update with payload', (done) => {
      apiSpy.post.mockReturnValue(of(undefined));
      const payload = { id: 5, startDate: '2024-05-01', endDate: '2024-05-03' };
      service.updateLeaveRequest(payload as any).subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('OrderRequest/Update', payload);
        done();
      });
    });
  });

  // ── deleteLeaveRequest() ──────────────────────────────────────────────────

  describe('deleteLeaveRequest()', () => {
    it('calls DELETE OrderRequest/Delete?id=<id>', (done) => {
      apiSpy.delete.mockReturnValue(of(undefined));
      service.deleteLeaveRequest(99).subscribe(() => {
        expect(apiSpy.delete).toHaveBeenCalledWith('OrderRequest/Delete?id=99');
        done();
      });
    });
  });
});
