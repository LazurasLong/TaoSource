import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsOfTimeComponent } from './signals-of-time.component';

describe('SignalsOfTimeComponent', () => {
  let component: SignalsOfTimeComponent;
  let fixture: ComponentFixture<SignalsOfTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalsOfTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalsOfTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
