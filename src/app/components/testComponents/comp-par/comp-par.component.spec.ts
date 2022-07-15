import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParComponent } from './comp-par.component';

describe('CompParComponent', () => {
  let component: CompParComponent;
  let fixture: ComponentFixture<CompParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
