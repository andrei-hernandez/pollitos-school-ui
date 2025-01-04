import { ChangeDetectionStrategy, Component, Inject, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../../components/student/student.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentServiceService } from '../../services/student.service.service';
import { Student } from '../../../../shared/modules/student.model';


@Component({
  selector: 'app-edit-estudent',
  imports: [
    CommonModule,
    StudentComponent,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './edit-estudent.component.html',
  styleUrl: './edit-estudent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditEstudentComponent {
  @Input() school?: string;

  @Input() student: Student = {
    id : 0,
    firstName: '',
    lastName:'',
    age: 0
   }

  readonly dialogRef = inject(MatDialogRef<EditEstudentComponent>);
  private studentService = inject(StudentServiceService);

  auxSchool: string = '';

  ngOnInit(){
    this.student = this.data.student;
    console.log(this.student);
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  saveStudent(){
    this.studentService.putStudent(this.data.school, this.student)
    .subscribe({
      next: (updateStudent) => {
        this.dialogRef.close(updateStudent);
      },
      error: (err) => {
        console.error("Error => ", err);
      }
    })
  }
}
