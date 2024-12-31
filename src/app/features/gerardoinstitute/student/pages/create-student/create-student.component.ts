import {Component} from '@angular/core'
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {StudentServiceGerardoInstitute} from "../../service/student-api.service"
import {StudentModel} from "../../../../../core/models/student.model"

@Component({
  selector: 'app-create-student',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  studentForm: FormGroup
  studentId: number | null = null
  errorMessage: string = ''

  constructor(
    protected router: Router,
    private studentService: StudentServiceGerardoInstitute,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]],
    })
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: StudentModel = { ...this.studentForm.value }
      this.studentService.createStudent(newStudent).subscribe({
        next: () => {
          console.log('Student created successfully')
          this.router.navigate(['/gerardoinstitute/student/list'])
        },
        error: (err) => {
          console.error('Error creating student:', err)
          this.errorMessage = 'Failed to create student. Please try again.'
        },
      })
    } else {
      console.error('Form is invalid')
      this.errorMessage = 'Please fill out the form correctly.'
    }
  }

}
