import {Component, OnInit} from '@angular/core'
import {GradeModel} from "../../../../../core/models/grade.model"
import {ActivatedRoute, Router} from "@angular/router"
import {GradeServiceZetCollege} from "../../service/grade-api.service"

@Component({
  selector: 'app-view-grade',
  imports: [],
  templateUrl: './view-grade.component.html',
  styleUrl: './view-grade.component.css'
})
export class ViewGradeComponent implements OnInit {
  grades: GradeModel[] = []
  errorMessage: string = ''
  studentId: number = 0
  studentName: string = ''

  constructor(
    private route: ActivatedRoute,
    private gradeService: GradeServiceZetCollege,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'))
    if (this.studentId) {
      this.fetchGrades()
    } else {
      this.errorMessage = 'Invalid student ID.'
    }
  }

  fetchGrades(): void {
    this.gradeService.getGradeByStudentId(this.studentId).subscribe({
      next: (data) => {
        this.studentName = data[0].student.firstName + ' ' + data[0].student.lastName
        this.grades = data
      },
      error: (err) => {
        console.error('Error fetching grades:', err)
        this.errorMessage = 'Failed to load grades. Please try again later.'
      },
    })
  }

  goBack(): void {
    this.router.navigate(['/zetcollege/student/list'])
  }
}
