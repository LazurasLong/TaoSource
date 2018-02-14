import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCarePathComponent } from './animal-care-path.component';

describe('AnimalCarePathComponent', () => {
  let component: AnimalCarePathComponent;
  let fixture: ComponentFixture<AnimalCarePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCarePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCarePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
