/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorstMusicComponent } from './worst-music.component';

describe('WorstMusicComponent', () => {
  let component: WorstMusicComponent;
  let fixture: ComponentFixture<WorstMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
