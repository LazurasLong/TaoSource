/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ICanFeelComponent } from './ican-feel.component';

describe('ICanFeelComponent', () => {
  let component: ICanFeelComponent;
  let fixture: ComponentFixture<ICanFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICanFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICanFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
