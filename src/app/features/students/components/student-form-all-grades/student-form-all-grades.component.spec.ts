import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormAllGradesComponent } from './student-form-all-grades.component';

describe('StudentFormAllGradesComponent', () => {
  let component: StudentFormAllGradesComponent;
  let fixture: ComponentFixture<StudentFormAllGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormAllGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormAllGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
