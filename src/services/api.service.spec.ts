import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { environment } from '../environment';

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpTestingController;

  const BASE = environment.baseUrl; // '/api/'

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(ApiService);
    http    = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify(); // assert no unexpected requests remain
  });

  // ── get() ─────────────────────────────────────────────────────────────────

  describe('get()', () => {
    it('calls GET on baseUrl + endpoint', () => {
      service.get('Contract/GetAll').subscribe();
      const req = http.expectOne(`${BASE}Contract/GetAll`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('appends query params when provided', () => {
      service.get('Contract/Get', { ContractId: 42 }).subscribe();
      const req = http.expectOne(`${BASE}Contract/Get?ContractId=42`);
      expect(req.request.method).toBe('GET');
      req.flush({});
    });

    it('omits null/undefined param values', () => {
      service.get('HR/GetAll', { page: null, size: undefined, sort: 'asc' }).subscribe();
      const req = http.expectOne(`${BASE}HR/GetAll?sort=asc`);
      expect(req.request.params.has('page')).toBe(false);
      expect(req.request.params.has('size')).toBe(false);
      req.flush({});
    });

    it('sends no params object when not provided', () => {
      service.get('Lookup/GetAllCountries').subscribe();
      const req = http.expectOne(`${BASE}Lookup/GetAllCountries`);
      expect(req.request.urlWithParams).toBe(`${BASE}Lookup/GetAllCountries`);
      req.flush([]);
    });

    it('emits the response body', () => {
      const payload = { id: 1, name: 'Egypt' };
      let result: unknown;
      service.get<typeof payload>('Lookup/GetAllCountries').subscribe(r => (result = r));
      http.expectOne(`${BASE}Lookup/GetAllCountries`).flush(payload);
      expect(result).toEqual(payload);
    });
  });

  // ── post() ────────────────────────────────────────────────────────────────

  describe('post()', () => {
    it('calls POST on baseUrl + endpoint with body', () => {
      const body = { email: 'a@b.com', password: 'pw' };
      service.post('Auth/login', body).subscribe();
      const req = http.expectOne(`${BASE}Auth/login`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(body);
      req.flush({ token: 'tk' });
    });

    it('sends empty object when data is null', () => {
      service.post('SomeEndpoint', null as unknown as object).subscribe();
      const req = http.expectOne(`${BASE}SomeEndpoint`);
      expect(req.request.body).toEqual({});
      req.flush({});
    });

    it('emits the response body', () => {
      const response = { success: true, data: { id: 5 } };
      let result: unknown;
      service.post('Contract/Create', {}).subscribe(r => (result = r));
      http.expectOne(`${BASE}Contract/Create`).flush(response);
      expect(result).toEqual(response);
    });
  });

  // ── postForm() ────────────────────────────────────────────────────────────

  describe('postForm()', () => {
    it('calls POST with FormData body', () => {
      const form = new FormData();
      form.append('file', new Blob(['content']), 'test.pdf');
      service.postForm('Attachment/Upload', form).subscribe();
      const req = http.expectOne(`${BASE}Attachment/Upload`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toBeInstanceOf(FormData);
      req.flush({ filePath: '/uploads/test.pdf' });
    });
  });

  // ── put() ─────────────────────────────────────────────────────────────────

  describe('put()', () => {
    it('calls PUT on baseUrl + endpoint with body', () => {
      const body = { amount: 500 };
      service.put('Salary/UpdateCompanyBalance', body).subscribe();
      const req = http.expectOne(`${BASE}Salary/UpdateCompanyBalance`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(body);
      req.flush({ success: true });
    });

    it('appends query params when provided', () => {
      service.put('Withdraw/ProcessRequest/7', {}, { status: 'approved' }).subscribe();
      const req = http.expectOne(`${BASE}Withdraw/ProcessRequest/7?status=approved`);
      expect(req.request.method).toBe('PUT');
      req.flush({});
    });
  });

  // ── delete() ──────────────────────────────────────────────────────────────

  describe('delete()', () => {
    it('calls DELETE on baseUrl + endpoint + id', () => {
      service.delete('Contract/Delete?id=', 99).subscribe();
      const req = http.expectOne(`${BASE}Contract/Delete?id=99`);
      expect(req.request.method).toBe('DELETE');
      req.flush({ success: true });
    });

    it('calls DELETE without appending id when id is undefined', () => {
      service.delete('SomeEndpoint').subscribe();
      const req = http.expectOne(`${BASE}SomeEndpoint`);
      expect(req.request.method).toBe('DELETE');
      req.flush({});
    });

    it('calls DELETE without appending id when id is null', () => {
      service.delete('SomeEndpoint', null).subscribe();
      const req = http.expectOne(`${BASE}SomeEndpoint`);
      expect(req.request.method).toBe('DELETE');
      req.flush({});
    });
  });

  // ── getBlob() ─────────────────────────────────────────────────────────────

  describe('getBlob()', () => {
    it('calls GET with responseType blob', () => {
      service.getBlob('Report/generate-pdf', { ContractId: 3 }).subscribe();
      const req = http.expectOne(`${BASE}Report/generate-pdf?ContractId=3`);
      expect(req.request.method).toBe('GET');
      expect(req.request.responseType).toBe('blob');
      req.flush(new Blob(['%PDF'], { type: 'application/pdf' }));
    });

    it('emits a Blob response', () => {
      const pdfBlob = new Blob(['%PDF'], { type: 'application/pdf' });
      let result: Blob | undefined;
      service.getBlob('Report/generate-pdf').subscribe(b => (result = b));
      http.expectOne(`${BASE}Report/generate-pdf`).flush(pdfBlob);
      expect(result).toBeInstanceOf(Blob);
    });
  });
});
