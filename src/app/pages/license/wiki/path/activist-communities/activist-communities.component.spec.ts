import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivistCommunitiesComponent } from './activist-communities.component';

describe('ActivistCommunitiesComponent', () => {
  let component: ActivistCommunitiesComponent;
  let fixture: ComponentFixture<ActivistCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivistCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivistCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
