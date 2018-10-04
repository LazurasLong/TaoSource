/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgainstTheGreedComponent } from './against-the-greed.component';

describe('AgainstTheGreedComponent', () => {
  let component: AgainstTheGreedComponent;
  let fixture: ComponentFixture<AgainstTheGreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgainstTheGreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgainstTheGreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
