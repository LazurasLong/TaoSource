import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdicCoinsComponent } from './odic-coins.component';

describe('OdicCoinsComponent', () => {
  let component: OdicCoinsComponent;
  let fixture: ComponentFixture<OdicCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdicCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdicCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
