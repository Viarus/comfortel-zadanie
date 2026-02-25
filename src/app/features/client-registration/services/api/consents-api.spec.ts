import { TestBed } from '@angular/core/testing';

import { ConsentsApi } from './consents-api';

describe('ConsentsApi', () => {
  let service: ConsentsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsentsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
