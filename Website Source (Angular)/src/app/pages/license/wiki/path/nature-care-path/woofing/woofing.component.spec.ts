import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoofingComponent } from './woofing.component';

describe('WoofingComponent', () => {
  let component: WoofingComponent;
  let fixture: ComponentFixture<WoofingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoofingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
