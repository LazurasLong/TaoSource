/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeedsPath2ParadiseComponent } from './deeds-path2-paradise.component';

describe('DeedsPath2ParadiseComponent', () => {
  let component: DeedsPath2ParadiseComponent;
  let fixture: ComponentFixture<DeedsPath2ParadiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedsPath2ParadiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedsPath2ParadiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
