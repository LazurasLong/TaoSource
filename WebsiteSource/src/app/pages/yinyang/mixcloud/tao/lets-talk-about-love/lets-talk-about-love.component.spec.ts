/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetsTalkAboutLoveComponent } from './lets-talk-about-love.component';

describe('LetsTalkAboutLoveComponent', () => {
  let component: LetsTalkAboutLoveComponent;
  let fixture: ComponentFixture<LetsTalkAboutLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsTalkAboutLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsTalkAboutLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
