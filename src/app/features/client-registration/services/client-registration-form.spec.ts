import { TestBed } from '@angular/core/testing';

import { ClientRegistrationForm } from './client-registration-form';

describe('ClientRegistrationForm', () => {
  let service: ClientRegistrationForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientRegistrationForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
