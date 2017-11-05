/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetsDiveIntoTheWorldofJavaScriptComponent } from './lets-dive-into-the-worldof-java-script.component';

describe('LetsDiveIntoTheWorldofJavaScriptComponent', () => {
  let component: LetsDiveIntoTheWorldofJavaScriptComponent;
  let fixture: ComponentFixture<LetsDiveIntoTheWorldofJavaScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsDiveIntoTheWorldofJavaScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsDiveIntoTheWorldofJavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
