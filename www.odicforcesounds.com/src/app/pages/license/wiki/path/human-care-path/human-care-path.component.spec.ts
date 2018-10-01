import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCarePathComponent } from './human-care-path.component';

describe('HumanCarePathComponent', () => {
  let component: HumanCarePathComponent;
  let fixture: ComponentFixture<HumanCarePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanCarePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanCarePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
