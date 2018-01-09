/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrainChiloutComponent } from './brain-chilout.component';

describe('BrainChiloutComponent', () => {
  let component: BrainChiloutComponent;
  let fixture: ComponentFixture<BrainChiloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainChiloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainChiloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
