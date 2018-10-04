/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MysticTheoriesCultComponent } from './mystic-theories-cult.component';

describe('MysticTheoriesCultComponent', () => {
  let component: MysticTheoriesCultComponent;
  let fixture: ComponentFixture<MysticTheoriesCultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysticTheoriesCultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticTheoriesCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
