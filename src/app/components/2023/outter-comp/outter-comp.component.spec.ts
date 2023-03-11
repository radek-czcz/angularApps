import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutterCompComponent } from './outter-comp.component';

describe('OutterCompComponent', () => {
  let component: OutterCompComponent;
  let fixture: ComponentFixture<OutterCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutterCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
