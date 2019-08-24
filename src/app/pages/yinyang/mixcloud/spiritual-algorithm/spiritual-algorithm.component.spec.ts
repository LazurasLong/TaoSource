import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualAlgorithmComponent } from './spiritual-algorithm.component';

describe('SpiritualAlgorithmComponent', () => {
  let component: SpiritualAlgorithmComponent;
  let fixture: ComponentFixture<SpiritualAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritualAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
