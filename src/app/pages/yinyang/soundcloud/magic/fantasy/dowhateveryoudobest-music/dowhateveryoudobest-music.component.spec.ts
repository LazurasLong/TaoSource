/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DowhateveryoudobestMusicComponent } from './dowhateveryoudobest-music.component';

describe('DowhateveryoudobestMusicComponent', () => {
  let component: DowhateveryoudobestMusicComponent;
  let fixture: ComponentFixture<DowhateveryoudobestMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowhateveryoudobestMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowhateveryoudobestMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
