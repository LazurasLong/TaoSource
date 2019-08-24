import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretResponsabilityExposedComponent } from './secret-responsability-exposed.component';

describe('SecretResponsabilityExposedComponent', () => {
  let component: SecretResponsabilityExposedComponent;
  let fixture: ComponentFixture<SecretResponsabilityExposedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretResponsabilityExposedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretResponsabilityExposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
