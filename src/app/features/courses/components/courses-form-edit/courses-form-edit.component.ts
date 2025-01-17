import {Component, Inject, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CourseService} from '../../services/course.service';
import {Course} from '../../../../core/models/course.model';

@Component({
  selector: 'app-courses-form-edit',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './courses-form-edit.component.html',
  styleUrl: './courses-form-edit.component.css'
})
export class CoursesFormEditComponent {

  courseEditForm: FormGroup;
  private courseService = inject(CourseService)

  constructor(
    public dialogRef: MatDialogRef<CoursesFormEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {
      activeSchool: string,
      courseToEdit: Course
    }
  ) {
    this.courseEditForm = this.formBuilder.group({
      courseId: [null, Validators.required],
      name: [null, [Validators.required]],
      professorName: [null, Validators.required],
      schoolId: [null, Validators.required]
    })
  }

  ngOnInit() {

    this.courseEditForm.setValue({
      courseId: this.data.courseToEdit.id,
      name: this.data.courseToEdit.name,
      professorName: this.data.courseToEdit.professorName,
      schoolId:this.data.activeSchool == "GerardoInstitute"? 1:2
    });
  }

  close() {
    this.dialogRef.close()
  }

  updateCourse() {

    const formData = this.courseEditForm.value

    const courseToEdit: Course = {
      id: this.data.courseToEdit.id,
      name: formData.name,
      professorName: formData.professorName,
      schoolId: formData.activeSchool,
    }

    this.courseService.editCourse(courseToEdit).subscribe({
      next:(response) =>{
        console.log("Updated course", response);
        this.dialogRef.close()
      },
      error: (error) =>{
        console.error('Error editing course:', error);
        alert('An error occurred while editing the course.');
      }
    })


  }
}
