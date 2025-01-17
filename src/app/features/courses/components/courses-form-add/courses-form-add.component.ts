import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../services/course.service';
import { Course } from '../../../../core/models/course.model';

@Component({
  selector: 'app-courses-form-add',
  imports: [ReactiveFormsModule],
  templateUrl: './courses-form-add.component.html',
  styleUrl: './courses-form-add.component.css',
})
export class CoursesFormAddComponent {
  courseAddForm: FormGroup;
  private courseService = inject(CourseService);

  constructor(
    public dialogRef: MatDialogRef<CoursesFormAddComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { activeSchool: string },
  ) {
    this.courseAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      professorName: ['', [Validators.required]],
    });
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.courseAddForm.setValue({
      name: 'Test',
      professorName: 'professor TEST',
    });
  }

  addNewCourse() {
    const formData = this.courseAddForm.value;

    const newCourse: Course = {
      name: formData.name,
      professorName: formData.professorName,
      schoolId: this.data.activeSchool == 'GerardoInstitute' ? 1 : 2,
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: (response) => {
        console.log('New COURSE added:', response);
        this.dialogRef.close('course Added');
      },
      error: (error) => {
        console.error('Error adding course:', error);
        alert('An error occurred while adding the course.');
      },
    });
  }
}
