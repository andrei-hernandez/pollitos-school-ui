import {Component, OnInit} from '@angular/core'
import {StudentModel} from "../../../../core/models/student.model"
import {StudentService} from "../../service/student-api.service"
import {Router} from "@angular/router"
import {Location} from "@angular/common"

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  imports: []
})
export class ListStudentComponent implements OnInit {
  students: StudentModel[] = []
  errorMessage: string = ''
  institution!: string

  constructor(private studentService: StudentService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.fetchStudents()
  }

  fetchStudents(): void {
    const fullPath = this.location.path()
    const urlSegments = fullPath.split('/')
    this.institution = urlSegments[1]
    console.log('Institution:', this.institution)

    this.studentService.getAllStudents(this.institution).subscribe({
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
    this.router.navigate([`/${this.institution}/student/edit`, id])
  }

  deleteGradeStudent(id: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this student from grades?')
    if (isConfirmed) {
      console.log('Delete student with ID:', id)
      this.studentService.deleteStudent(id, this.institution).subscribe({
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
    this.router.navigate([`/${this.institution}/student/create`])
  }

  viewGrades(id: number): void {
    this.router.navigate([`/${this.institution}/grade/list`, id])
  }
}
