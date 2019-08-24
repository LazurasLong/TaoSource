import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiseChoiceComponent } from './wise-choice.component';

describe('WiseChoiceComponent', () => {
  let component: WiseChoiceComponent;
  let fixture: ComponentFixture<WiseChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiseChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiseChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
