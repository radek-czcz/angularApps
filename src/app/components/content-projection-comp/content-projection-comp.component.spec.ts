import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionCompComponent } from './content-projection-comp.component';

describe('ContentProjectionCompComponent', () => {
  let component: ContentProjectionCompComponent;
  let fixture: ComponentFixture<ContentProjectionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
