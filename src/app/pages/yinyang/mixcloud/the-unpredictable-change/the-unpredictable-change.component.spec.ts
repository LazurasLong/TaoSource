import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUnpredictableChangeComponent } from './the-unpredictable-change.component';

describe('TheUnpredictableChangeComponent', () => {
  let component: TheUnpredictableChangeComponent;
  let fixture: ComponentFixture<TheUnpredictableChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheUnpredictableChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheUnpredictableChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
