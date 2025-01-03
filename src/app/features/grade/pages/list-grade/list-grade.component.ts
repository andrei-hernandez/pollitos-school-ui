import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {StudentService} from "../../../student/service/student-api.service"
import {StudentModel} from "../../../../core/models/student.model"
import {FormsModule} from "@angular/forms"
import {Location} from "@angular/common"

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
  institution!: string

  constructor(
    private studentService: StudentService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const fullPath = this.location.path()
    const urlSegments = fullPath.split('/')
    this.institution = urlSegments[1]
    console.log('Institution:', this.institution)

    this.loadStudents()
  }

  loadStudents(): void {
    this.studentService.getAllStudents(this.institution).subscribe({
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
      this.router.navigate([`/${this.institution}/grade/list/${this.selectedStudentId}`])
    } else {
      this.errorMessage = 'Please select a student.'
    }
  }
}
