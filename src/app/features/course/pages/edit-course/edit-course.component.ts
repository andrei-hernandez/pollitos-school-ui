import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {ActivatedRoute, Router} from "@angular/router"
import {CourseService} from "../../service/course-api.service"
import {CourseModel} from "../../../../core/models/course.model"
import {Location} from "@angular/common"

@Component({
  selector: 'app-edit-course',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit {
  courseForm: FormGroup
  courseId: number | null = null
  isLoading: boolean = false
  errorMessage: string = ''
  institution!: string

  constructor(
    private route: ActivatedRoute,
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

    this.courseId = Number(this.route.snapshot.paramMap.get('id'))
    if (this.courseId) {
      this.loadStudentData()
    }
  }

  loadStudentData(): void {
    this.isLoading = true
    this.courseService.getCourseById(this.courseId!, this.institution!).subscribe({
      next: (course) => {
        this.courseForm.patchValue(course)
        this.isLoading = false
      },
      error: (err) => {
        console.error('Error loading course data:', err)
        this.errorMessage = 'Error loading course data.'
        this.isLoading = false
      },
    })
  }

  onSubmit(): void {
    if (this.courseForm.valid && this.courseId) {
      const updateCourse: CourseModel = {id: this.courseId, ...this.courseForm.value}
      this.courseService.updateCourse(this.courseId, updateCourse, this.institution).subscribe({
        next: () => {
          console.log('Course updated successfully')
          this.router.navigate([`/${this.institution}/course/list`])
        },
        error: (err) => {
          console.error('Error updating Course:', err)
          this.errorMessage = 'Failed to update course. Please try again.'
        },
      })
    }
  }

  routeNavigate(): void {
    this.router.navigate([`/${this.institution}/course/list`])
  }
}
