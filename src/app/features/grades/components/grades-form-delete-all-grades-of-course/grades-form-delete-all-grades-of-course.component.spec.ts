import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFormDeleteAllGradesOfCourseComponent } from './grades-form-delete-all-grades-of-course.component';

describe('GradesFormDeleteAllGradesOfCourseComponent', () => {
  let component: GradesFormDeleteAllGradesOfCourseComponent;
  let fixture: ComponentFixture<GradesFormDeleteAllGradesOfCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesFormDeleteAllGradesOfCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesFormDeleteAllGradesOfCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
