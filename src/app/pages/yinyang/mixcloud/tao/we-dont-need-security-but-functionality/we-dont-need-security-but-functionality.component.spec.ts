/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeDontNeedSecurityButFunctionalityComponent } from './we-dont-need-security-but-functionality.component';

describe('WeDontNeedSecurityButFunctionalityComponent', () => {
  let component: WeDontNeedSecurityButFunctionalityComponent;
  let fixture: ComponentFixture<WeDontNeedSecurityButFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDontNeedSecurityButFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDontNeedSecurityButFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
