import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCompComponent } from './content-comp.component';

describe('ContentCompComponent', () => {
  let component: ContentCompComponent;
  let fixture: ComponentFixture<ContentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
