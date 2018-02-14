import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCarePathComponent } from './business-care-path.component';

describe('BusinessCarePathComponent', () => {
  let component: BusinessCarePathComponent;
  let fixture: ComponentFixture<BusinessCarePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCarePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCarePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
