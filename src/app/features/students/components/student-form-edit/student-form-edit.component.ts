import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Student } from '../../../../core/models/student.model';

@Component({
  selector: 'app-student-form-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form-edit.component.html',
  styleUrl: './student-form-edit.component.css',
})
export class StudentFormEditComponent {
  studentEditForm: FormGroup;
  private studentService = inject(StudentService);

  constructor(
    public dialogRef: MatDialogRef<StudentFormEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      activeSchool: string;
      studentToEdit: Student;
    },
  ) {
    this.studentEditForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      schoolId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.studentEditForm.setValue({
      firstName: this.data.studentToEdit.firstName,
      lastName: this.data.studentToEdit.firstName,
      age: this.data.studentToEdit.age,
      schoolId:
        this.data.activeSchool === 'GerardoInstitute'
          ? 1
          : this.data.activeSchool === 'ZetCollege'
            ? 2
            : 0,
    });
  }

  close() {
    this.dialogRef.close();
  }

  updateStudent() {
    const formData = this.studentEditForm.value;

    const studentToEdit: Student = {
      id: this.data.studentToEdit.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      schoolId: formData.schoolId,
    };

    this.studentService.editStudent(studentToEdit).subscribe({
      next: (response) => {
        console.log('Updated Student', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error editing student:', error);
        alert('An error occurred while editing the student.');
      },
    });
  }
}
