/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IAmMusicPerfectBombComponent } from './iam-music-perfect-bomb.component';

describe('IAmMusicPerfectBombComponent', () => {
  let component: IAmMusicPerfectBombComponent;
  let fixture: ComponentFixture<IAmMusicPerfectBombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmMusicPerfectBombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmMusicPerfectBombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
