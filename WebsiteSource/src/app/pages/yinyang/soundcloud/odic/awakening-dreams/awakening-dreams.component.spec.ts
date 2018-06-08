import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwakeningDreamsComponent } from './awakening-dreams.component';

describe('AwakeningDreamsComponent', () => {
  let component: AwakeningDreamsComponent;
  let fixture: ComponentFixture<AwakeningDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwakeningDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwakeningDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
