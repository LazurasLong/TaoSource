import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFireComponent } from './magic-fire.component';

describe('MagicFireComponent', () => {
  let component: MagicFireComponent;
  let fixture: ComponentFixture<MagicFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
