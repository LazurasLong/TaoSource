import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietyOwnersComponent } from './propriety-owners.component';

describe('ProprietyOwnersComponent', () => {
  let component: ProprietyOwnersComponent;
  let fixture: ComponentFixture<ProprietyOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietyOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietyOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
