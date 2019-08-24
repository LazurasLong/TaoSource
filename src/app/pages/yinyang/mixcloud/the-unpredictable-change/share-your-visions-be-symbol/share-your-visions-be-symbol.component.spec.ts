/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShareYourVisionsBeSymbolComponent } from './share-your-visions-be-symbol.component';

describe('ShareYourVisionsBeSymbolComponent', () => {
  let component: ShareYourVisionsBeSymbolComponent;
  let fixture: ComponentFixture<ShareYourVisionsBeSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareYourVisionsBeSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareYourVisionsBeSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
