/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IWantToShowYouSomethingComponent } from './i-want-to-show-you-something.component';

describe('IWantToShowYouSomethingComponent', () => {
  let component: IWantToShowYouSomethingComponent;
  let fixture: ComponentFixture<IWantToShowYouSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWantToShowYouSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantToShowYouSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
