import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingDreamsHuntersComponent } from './hunting-dreams-hunters.component';

describe('HuntingDreamsHuntersComponent', () => {
  let component: HuntingDreamsHuntersComponent;
  let fixture: ComponentFixture<HuntingDreamsHuntersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuntingDreamsHuntersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntingDreamsHuntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
