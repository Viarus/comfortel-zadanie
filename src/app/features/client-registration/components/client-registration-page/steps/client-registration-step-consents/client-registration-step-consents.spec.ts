import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationStepConsents } from './client-registration-step-consents';

describe('ClientRegistrationStepConsents', () => {
  let component: ClientRegistrationStepConsents;
  let fixture: ComponentFixture<ClientRegistrationStepConsents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRegistrationStepConsents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRegistrationStepConsents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
