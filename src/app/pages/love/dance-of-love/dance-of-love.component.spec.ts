/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DanceOfLoveComponent } from './dance-of-love.component';

describe('DanceOfLoveComponent', () => {
  let component: DanceOfLoveComponent;
  let fixture: ComponentFixture<DanceOfLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceOfLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceOfLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
