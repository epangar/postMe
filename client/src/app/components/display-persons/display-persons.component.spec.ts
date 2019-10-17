import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonsComponent } from './display-persons.component';

describe('DisplayPersonsComponent', () => {
  let component: DisplayPersonsComponent;
  let fixture: ComponentFixture<DisplayPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
