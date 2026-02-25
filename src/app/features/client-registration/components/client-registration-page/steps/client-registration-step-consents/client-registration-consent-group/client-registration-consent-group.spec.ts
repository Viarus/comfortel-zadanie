import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationConsentGroup } from './client-registration-consent-group';

describe('ClientRegistrationConsentGroup', () => {
  let component: ClientRegistrationConsentGroup;
  let fixture: ComponentFixture<ClientRegistrationConsentGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRegistrationConsentGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRegistrationConsentGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
