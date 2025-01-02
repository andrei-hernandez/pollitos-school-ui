import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {ActivatedRoute, Router} from "@angular/router"
import {StudentServiceZetCollege} from "../../service/student-api.service"
import {StudentModel} from "../../../../../core/models/student.model"

@Component({
  selector: 'app-edit-student',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup
  studentId: number | null = null
  isLoading: boolean = false
  errorMessage: string = ''

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private studentService: StudentServiceZetCollege,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]],
    })
  }

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'))
    if (this.studentId) {
      this.loadStudentData()
    }
  }

  loadStudentData(): void {
    this.isLoading = true
    this.studentService.getStudentById(this.studentId!).subscribe({
      next: (student) => {
        this.studentForm.patchValue(student)
        this.isLoading = false
      },
      error: (err) => {
        console.error('Error loading student data:', err)
        this.errorMessage = 'Error loading student data.'
        this.isLoading = false
      },
    })
  }

  onSubmit(): void {
    if (this.studentForm.valid && this.studentId) {
      const updatedStudent: StudentModel = {id: this.studentId, ...this.studentForm.value}
      this.studentService.updateStudent(this.studentId, updatedStudent).subscribe({
        next: () => {
          console.log('Student updated successfully')
          this.router.navigate(['/zetcollege/student/list'])
        },
        error: (err) => {
          console.error('Error updating student:', err)
          this.errorMessage = 'Failed to update student. Please try again.'
        },
      })
    }
  }
}
