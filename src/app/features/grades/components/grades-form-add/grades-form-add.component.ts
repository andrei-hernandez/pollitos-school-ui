import { Component, EventEmitter, Inject, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentService } from '../../../students/services/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GradeService } from '../../services/grade.service';
import { Student } from '../../../../core/models/student.model';
import { Grade } from '../../../../core/models/grade.model';

@Component({
  selector: 'app-grades-form-add',
  imports: [ReactiveFormsModule],
  templateUrl: './grades-form-add.component.html',
  styleUrl: './grades-form-add.component.css',
})
export class GradesFormAddComponent {
  gradeAddForm: FormGroup;
  private gradeService = inject(GradeService);

  constructor(
    public dialogRef: MatDialogRef<GradesFormAddComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { activeSchool: string },
  ) {
    this.gradeAddForm = this.formBuilder.group({
      courseId: [null, Validators.required],
      score: [null, [Validators.required, Validators.min(1)]],
      studentId: [null, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.gradeAddForm.setValue({
      courseId: 1,
      score: 100,
      studentId: 4,
    });
  }

  addNewGrade() {
    const formData = this.gradeAddForm.value;

    const newGrade: Grade = {
      id: formData.id,
      courseId: formData.courseId,
      score: formData.score,
      studentId: formData.studentId,
    };

    this.gradeService.addGrade(newGrade).subscribe({
      next: (response) => {
        console.log('New GRADE added:', response);
        this.dialogRef.close('studentAdded'); // Close the modal and send a value to the parent
      },
      error: (error) => {
        console.error('Error adding grade:', error);
        alert('An error occurred while adding the grade.');
      },
    });
  }
}
