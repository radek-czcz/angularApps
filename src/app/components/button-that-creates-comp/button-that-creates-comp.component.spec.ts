import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThatCreatesCompComponent } from './button-that-creates-comp.component';

describe('ButtonThatCreatesCompComponent', () => {
  let component: ButtonThatCreatesCompComponent;
  let fixture: ComponentFixture<ButtonThatCreatesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonThatCreatesCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonThatCreatesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
