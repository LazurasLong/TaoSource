/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IWantYouYouWantMeComponent } from './iwant-you-you-want-me.component';

describe('IWantYouYouWantMeComponent', () => {
  let component: IWantYouYouWantMeComponent;
  let fixture: ComponentFixture<IWantYouYouWantMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWantYouYouWantMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantYouYouWantMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
