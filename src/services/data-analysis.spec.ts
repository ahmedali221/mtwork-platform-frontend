import { TestBed } from '@angular/core/testing';

import { DataAnalysisService } from './data-analysis';

describe('DataAnalysis', () => {
  let service: DataAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
