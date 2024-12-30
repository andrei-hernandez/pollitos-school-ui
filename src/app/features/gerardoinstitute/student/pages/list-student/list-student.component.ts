import {Component, OnInit} from '@angular/core'
import {StudentModel} from "../../../../../core/models/student.model"
import {StudentServiceGerardoInstitute} from "../../service/student-api.service"

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  imports: [ ]
})
export class ListStudentComponent implements OnInit {
  students: StudentModel[] = []
  errorMessage: string = ''

  constructor(private studentService: StudentServiceGerardoInstitute) {}

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
  }

  deleteStudent(id: number): void {
    console.log('Delete student with ID:', id)
  }
}
