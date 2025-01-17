import {Component, Inject, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../services/student.service';
import {Grade} from '../../../../core/models/grade.model';
import {NgForOf, NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-student-form-all-grades',
  imports: [
    NgForOf,
    ReactiveFormsModule,
  ],
  templateUrl: './student-form-all-grades.component.html',
  styleUrl: './student-form-all-grades.component.css'
})
export class StudentFormAllGradesComponent {
  grades =signal<Grade[]>([])

  constructor(
    public  dialogRef: MatDialogRef<StudentFormAllGradesComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA)
    public  data:{
      id: number,
      activeSchool: string
    }
  ) {
  }

  allGrades(){
    this.studentService.getGrades(this.data.id, this.data.activeSchool).subscribe({
      next: (grades) =>{
        this.grades.set(grades)
        console.table(grades)
      },
      error: (error) => {}
    })
  }

  close(){
    this.dialogRef.close()
  }

  ngOnInit(){
    this.allGrades()
  }
}
