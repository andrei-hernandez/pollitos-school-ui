import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms"
import {StudentServiceZetCollege} from "../../../student/service/student-api.service"
import {CourseServiceZetCollege} from "../../../course/service/course-api.service"
import {GradeServiceZetCollege} from "../../service/grade-api.service"
import {Router} from "@angular/router"
import {StudentModel} from "../../../../../core/models/student.model"
import {CourseModel} from "../../../../../core/models/course.model"
import {NewGradeModel} from "../../../../../core/models/newGrade.model"

@Component({
  selector: 'app-create-grade',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-grade.component.html',
  styleUrl: './create-grade.component.css'
})
export class CreateGradeComponent implements OnInit {
  gradeForm!: FormGroup
  students: StudentModel[] = []
  courses: CourseModel[] = []
  errorMessage: string = ''

  constructor(
    private fb: FormBuilder,
    private studentService: StudentServiceZetCollege,
    private courseService: CourseServiceZetCollege,
    private gradeService: GradeServiceZetCollege,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.gradeForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
    this.fetchStudents()
    this.fetchCourses()
  }

  fetchStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => (this.students = data),
      error: (err) => {
        console.error('Error fetching student:', err)
        this.errorMessage = 'Failed to fetch students. Please try again.'
      }
    })
  }

  fetchCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (data) => (
        this.courses = data
      ),
      error: (err) => {
        console.error('Error fetching courses:', err)
        this.errorMessage = 'Failed to fetch courses. Please try again.'
      }
    })
  }

  onSubmit(): void {
    if (this.gradeForm.valid) {
      const newGrade: NewGradeModel = {
        id: 0,
        studentId: this.gradeForm.value.studentId,
        courseId: this.gradeForm.value.courseId,
        score: this.gradeForm.value.score,
      }

      this.gradeService.createGrade(newGrade).subscribe({
        next: () => this.router.navigate(['/zetcollege/grade/list']),
        error: (err) => {
          console.error('Error creating grade:', err)
          this.errorMessage = 'Failed to create grade. Please try again.'
        },
      })
    }
  }
}
