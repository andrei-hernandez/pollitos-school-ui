import {Component, OnInit} from '@angular/core'
import {StudentModel} from "../../../../../core/models/student.model"
import {StudentServiceGerardoInstitute} from "../../service/student-api.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  imports: []
})
export class ListStudentComponent implements OnInit {
  students: StudentModel[] = []
  errorMessage: string = ''

  constructor(private studentService: StudentServiceGerardoInstitute, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchStudents()
  }

  fetchStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data
      },
      error: (err) => {
        console.error('Error loading students:', err)
        this.errorMessage = 'Error loading data. Please try again.'
      },
    })
  }

  editStudent(id: number): void {
    console.log('Edit student with ID:', id)
    this.router.navigate(['/gerardoinstitute/student/edit', id])
  }

  deleteGradeStudent(id: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this student from grades?')
    if (isConfirmed) {
      console.log('Delete student with ID:', id)
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          console.log('Student deleted successfully')
          this.fetchStudents()
        },
        error: (err) => {
          console.error('Error deleting student:', err)
        },
      })
    } else {
      console.log('Deletion cancelled')
    }
  }

  addStudent(): void {
    this.router.navigate(['/gerardoinstitute/student/create'])
  }

  viewStudent(id: number): void {
    this.router.navigate(['/gerardoinstitute/grade/list', id])
  }
}
