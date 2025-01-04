import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {CourseService} from "../../service/course-api.service"
import {CourseModel} from "../../../../core/models/course.model"
import {Location} from "@angular/common"


@Component({
  selector: 'app-create-course',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})

export class CreateCourseComponent implements OnInit {
  courseForm: FormGroup
  courseId: number | null = null
  errorMessage: string = ''
  institution!: string

  constructor(
    protected router: Router,
    private courseService: CourseService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      professorName: ['', [Validators.required, Validators.minLength(2)]],
    })
  }
  ngOnInit(): void {
    const fullPath = this.location.path()
    const urlSegments = fullPath.split('/')
    this.institution = urlSegments[1]
    console.log('Institution:', this.institution)
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const newCourse: CourseModel = { ...this.courseForm.value }
      this.courseService.createCourse(newCourse, this.institution).subscribe({
        next: () => {
          console.log('Course created successfully')
          this.router.navigate([`/${this.institution}/course/list`])
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

  routeNavigate(): void {
    this.router.navigate([`/${this.institution}/course/list`])
  }

}
