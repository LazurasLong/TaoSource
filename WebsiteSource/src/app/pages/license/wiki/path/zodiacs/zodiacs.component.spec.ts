import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacsComponent } from './zodiacs.component';

describe('ZodiacsComponent', () => {
  let component: ZodiacsComponent;
  let fixture: ComponentFixture<ZodiacsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
