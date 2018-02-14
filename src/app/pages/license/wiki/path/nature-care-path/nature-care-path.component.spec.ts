import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCarePathComponent } from './nature-care-path.component';

describe('NatureCarePathComponent', () => {
  let component: NatureCarePathComponent;
  let fixture: ComponentFixture<NatureCarePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureCarePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureCarePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
