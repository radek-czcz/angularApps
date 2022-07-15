import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChiComponent } from './comp-chi.component';

describe('CompChiComponent', () => {
  let component: CompChiComponent;
  let fixture: ComponentFixture<CompChiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompChiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
