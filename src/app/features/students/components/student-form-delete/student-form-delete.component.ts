import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form-delete',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-form-delete.component.html',
  styleUrl: './student-form-delete.component.css',
})
export class StudentFormDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentFormDeleteComponent>,
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

  onDeleteStudent() {
    this.studentService.deleteStudent(this.data.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
