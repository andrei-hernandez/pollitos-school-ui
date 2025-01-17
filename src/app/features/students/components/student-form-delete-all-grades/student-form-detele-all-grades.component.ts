import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form-detele-all-grades',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form-delete-all-grades.component.html',
  styleUrl: './student-form-delete-all-grades.component.css',
})
export class StudentFormDeleteAllGradesComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentFormDeleteAllGradesComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      firstName: string;
      schoolId: string;
    },
  ) {}

  close() {
    this.dialogRef.close();
  }

  onDeleteAllGradesStudent() {
    this.studentService.deleteAllGradesStudent(this.data.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
