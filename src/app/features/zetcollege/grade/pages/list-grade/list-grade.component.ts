import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {StudentServiceZetCollege} from "../../../student/service/student-api.service"
import {StudentModel} from "../../../../../core/models/student.model"
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-list-grade',
  imports: [
    FormsModule
  ],
  templateUrl: './list-grade.component.html',
  styleUrl: './list-grade.component.css'
})
export class ListGradeComponent implements OnInit {
  students: StudentModel[] = []
  selectedStudentId: number | null = null
  errorMessage: string = ''

  constructor(
    private studentService: StudentServiceZetCollege,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents()
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data
      },
      error: (err) => {
        console.error('Error loading students:', err)
        this.errorMessage = 'Failed to load students. Please try again later.'
      },
    })
  }

  navigateToGrades(): void {
    if (this.selectedStudentId) {
      this.router.navigate([`/zetcollege/grade/list/${this.selectedStudentId}`])
    } else {
      this.errorMessage = 'Please select a student.'
    }
  }
}
