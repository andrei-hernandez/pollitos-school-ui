import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {CourseModel} from "../../../../../core/models/course.model"
import {CourseServiceGerardoInstitute} from "../../service/course-api.service"

@Component({
  selector: 'app-list-course',
  imports: [],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent implements OnInit {
  courses: CourseModel[] = []
  errorMessage: string = ''

  constructor(private courseService: CourseServiceGerardoInstitute, private router: Router) {}

  ngOnInit(): void {
    this.fetchCourses()
  }

  fetchCourses(): void {
    this.courseService.getAllCourses().subscribe({
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
    this.router.navigate(['/gerardoinstitute/course/edit', id])
  }

  deleteCourse(id: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this course from grades?')
    if (isConfirmed) {
      console.log('Delete course with ID:', id)
      this.courseService.deleteCourse(id).subscribe({
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
    this.router.navigate(['/gerardoinstitute/course/create'])
  }

}
