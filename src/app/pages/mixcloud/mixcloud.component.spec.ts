/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixcloudComponent } from './mixcloud.component';

describe('MixcloudComponent', () => {
  let component: MixcloudComponent;
  let fixture: ComponentFixture<MixcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
