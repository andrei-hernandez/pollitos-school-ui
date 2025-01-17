import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../../../core/models/grade.model';

@Component({
  selector: 'app-grades-form-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './grades-form-edit.component.html',
  styleUrl: './grades-form-edit.component.css',
})
export class GradesFormEditComponent {
  gradeEditForm: FormGroup;
  private gradeService = inject(GradeService);

  constructor(
    public dialogRef: MatDialogRef<GradesFormEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      activeSchool: string;
      gradeToEdit: Grade;
    },
  ) {
    this.gradeEditForm = this.formBuilder.group({
      courseId: [null, Validators.required],
      score: [null, [Validators.required, Validators.min(1)]],
      studentId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.gradeEditForm.setValue({
      courseId: this.data.gradeToEdit.courseId,
      score: this.data.gradeToEdit.score,
      studentId: this.data.gradeToEdit.studentId,
    });
  }

  close() {
    this.dialogRef.close();
  }

  updateGrade() {
    const formData = this.gradeEditForm.value;

    const gradeToEdit: Grade = {
      id: this.data.gradeToEdit.id,
      courseId: formData.courseId,
      score: formData.score,
      studentId: formData.studentId,
    };

    this.gradeService.editGrade(gradeToEdit).subscribe({
      next: (response) => {
        console.log('Grade updated', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error editing grade:', error);
        alert('An error occurred while editing the grade.');
      },
    });
  }
}
