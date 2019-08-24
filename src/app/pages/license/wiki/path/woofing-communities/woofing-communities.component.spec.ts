import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoofingCommunitiesComponent } from './woofing-communities.component';

describe('WoofingCommunitiesComponent', () => {
  let component: WoofingCommunitiesComponent;
  let fixture: ComponentFixture<WoofingCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoofingCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoofingCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
