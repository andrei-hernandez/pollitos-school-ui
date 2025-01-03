import {Component} from '@angular/core'
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {StudentService} from "../../service/student-api.service"
import {StudentModel} from "../../../../core/models/student.model"
import {Location} from "@angular/common"

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
  institution!: string

  constructor(
    protected router: Router,
    private studentService: StudentService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]],
    })
  }

  onSubmit(): void {
    const fullPath = this.location.path()
    const urlSegments = fullPath.split('/')
    this.institution = urlSegments[1]
    console.log('Institution:', this.institution)

    if (this.studentForm.valid) {
      const newStudent: StudentModel = { ...this.studentForm.value }
      this.studentService.createStudent(newStudent, this.institution).subscribe({
        next: () => {
          console.log('Student created successfully')
          this.router.navigate([`/${this.institution}/student/list`])
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

  routerNavigate(): void {
    this.router.navigate([`/${this.institution}/student/list`])
  }
}
