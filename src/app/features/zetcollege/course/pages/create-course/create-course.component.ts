import { Component } from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {CourseServiceZetCollege} from "../../service/course-api.service"
import {CourseModel} from "../../../../../core/models/course.model"

@Component({
  selector: 'app-create-course',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})

export class CreateCourseComponent {
  courseForm: FormGroup
  courseId: number | null = null
  errorMessage: string = ''

  constructor(
    protected router: Router,
    private courseService: CourseServiceZetCollege,
    private fb: FormBuilder
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      professorName: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const newCourse: CourseModel = { ...this.courseForm.value }
      this.courseService.createCourse(newCourse).subscribe({
        next: () => {
          console.log('Course created successfully')
          this.router.navigate(['/zetcollege/course/list'])
        },
        error: (err) => {
          console.error('Error creating course:', err)
          this.errorMessage = 'Failed to create course. Please try again.'
        },
      })
    } else {
      console.error('Form is invalid')
      this.errorMessage = 'Please fill out the form correctly.'
    }
  }

}
