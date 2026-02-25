import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationStepDetails } from './client-registration-step-details';

describe('ClientRegistrationStepDetails', () => {
  let component: ClientRegistrationStepDetails;
  let fixture: ComponentFixture<ClientRegistrationStepDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRegistrationStepDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRegistrationStepDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
