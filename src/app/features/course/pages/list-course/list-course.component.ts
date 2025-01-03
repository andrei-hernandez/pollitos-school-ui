import {Component, OnInit} from '@angular/core'
import {Location} from '@angular/common'
import {Router} from "@angular/router"
import {CourseModel} from "../../../../core/models/course.model"
import {CourseService} from "../../service/course-api.service"

@Component({
  selector: 'app-list-course',
  imports: [],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent implements OnInit {
  courses: CourseModel[] = []
  errorMessage: string = ''
  institution!: string

  constructor(private courseService: CourseService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    const fullPath = this.location.path()
    const urlSegments = fullPath.split('/')
    this.institution = urlSegments[1]
    console.log('Institution:', this.institution)

    this.fetchCourses()
  }

  fetchCourses(): void {
    this.courseService.getAllCourses(this.institution).subscribe({
      next: (data) => {
        this.courses = data
      },
      error: (err) => {
        console.error('Error loading courses:', err)
        this.errorMessage = 'Error loading data. Please try again.'
      },
    })
  }

  editCourse(id: number): void {
    console.log('Edit course with ID:', id)
    this.router.navigate([`/${this.institution}/course/edit`, id])
  }

  deleteGradeCourse(id: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this course from grades?')
    if (isConfirmed) {
      console.log('Delete course with ID:', id)
      this.courseService.deleteCourse(id, this.institution).subscribe({
        next: () => {
          console.log('Course deleted successfully')
          this.fetchCourses()
        },
        error: (err) => {
          console.error('Error deleting Course:', err)
        },
      })
    } else {
      console.log('Deletion cancelled')
    }
  }

  addCourse(): void {
    this.router.navigate([`/${this.institution}/course/create`])
  }

}
