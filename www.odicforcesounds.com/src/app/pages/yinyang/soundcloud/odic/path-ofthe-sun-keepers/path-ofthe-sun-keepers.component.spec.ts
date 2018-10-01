import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathOftheSunKeepersComponent } from './path-ofthe-sun-keepers.component';

describe('PathOftheSunKeepersComponent', () => {
  let component: PathOftheSunKeepersComponent;
  let fixture: ComponentFixture<PathOftheSunKeepersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathOftheSunKeepersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathOftheSunKeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
