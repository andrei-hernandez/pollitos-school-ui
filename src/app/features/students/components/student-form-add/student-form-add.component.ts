import { Component, EventEmitter, Inject, inject, Output } from '@angular/core';
import { Student } from '../../../../core/models/student.model';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form-add.component.html',
  styleUrl: './student-form-add.component.css',
})
export class StudentFormAddComponent {
  studentAddForm: FormGroup; //Reactive form
  private studentService = inject(StudentService);
  @Output() studentAdded = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<StudentFormAddComponent>,
    private formBuilder: FormBuilder, //Service for building forms
    @Inject(MAT_DIALOG_DATA) public data: { activeSchool: string }, //Receive activeSchool
  ) {
    this.studentAddForm = this.formBuilder.group({
      // Initialize the form
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      schoolId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.studentAddForm.setValue({
      //Assign default values to form
      firstName: 'Juan',
      lastName: 'Pérez',
      age: 25,
      schoolId:
        this.data.activeSchool === 'GerardoInstitute'
          ? 1
          : this.data.activeSchool === 'ZetCollege'
            ? 2
            : 0, //Default value if no case matches
    });
  }

  addNewStudent() {
    const formData = this.studentAddForm.value; //Get the form values

    const newStudent: Student = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      schoolId: formData.schoolId,
    };

    this.studentService.addStudent(newStudent).subscribe({
      next: (response) => {
        console.log('New student added:', response);
        this.studentAdded.emit(); //Emit event to inform parent
        this.dialogRef.close('studentAdded'); //Close the modal and send a value to the parent
      },
      error: (error) => {
        console.error('Error adding student:', error);
        alert('An error occurred while adding the student.');
      },
    });
  }

  close() {
    this.dialogRef.close(); //Close the modal without any arguments
  }
}
