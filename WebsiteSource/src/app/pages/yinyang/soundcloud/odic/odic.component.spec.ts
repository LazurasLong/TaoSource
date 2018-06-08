import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdicComponent } from './odic.component';

describe('OdicComponent', () => {
  let component: OdicComponent;
  let fixture: ComponentFixture<OdicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
