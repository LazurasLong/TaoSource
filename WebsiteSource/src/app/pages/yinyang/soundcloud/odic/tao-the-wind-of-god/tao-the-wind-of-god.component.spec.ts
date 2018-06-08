import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoTheWindOfGodComponent } from './tao-the-wind-of-god.component';

describe('TaoTheWindOfGodComponent', () => {
  let component: TaoTheWindOfGodComponent;
  let fixture: ComponentFixture<TaoTheWindOfGodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoTheWindOfGodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoTheWindOfGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
