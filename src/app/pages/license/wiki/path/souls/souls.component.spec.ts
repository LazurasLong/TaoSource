import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulsComponent } from './souls.component';

describe('SoulsComponent', () => {
  let component: SoulsComponent;
  let fixture: ComponentFixture<SoulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
