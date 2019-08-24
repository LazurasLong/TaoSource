import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeAndSeeYouInMeComponent } from './come-and-see-you-in-me.component';

describe('ComeAndSeeYouInMeComponent', () => {
  let component: ComeAndSeeYouInMeComponent;
  let fixture: ComponentFixture<ComeAndSeeYouInMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeAndSeeYouInMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeAndSeeYouInMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
