import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticSignatureComponent } from './galactic-signature.component';

describe('GalacticSignatureComponent', () => {
  let component: GalacticSignatureComponent;
  let fixture: ComponentFixture<GalacticSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalacticSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalacticSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
