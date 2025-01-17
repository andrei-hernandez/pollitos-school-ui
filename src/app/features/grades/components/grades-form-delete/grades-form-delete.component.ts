import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GradeService} from '../../services/grade.service';

@Component({
  selector: 'app-grades-form-delete',
  imports: [],
  templateUrl: './grades-form-delete.component.html',
  styleUrl: './grades-form-delete.component.css'
})
export class GradesFormDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef <GradesFormDeleteComponent>,
    private gradeService:GradeService,
    @Inject(MAT_DIALOG_DATA)
    public data:{
      id: number,
      courseId: number,
      score: number,
      studentId: number,
      schoolActive: string,
    }
  ){}

  close(){
    this.dialogRef.close()
  }

  onDeleteGrade(){
    this.gradeService.deleteGrade(this.data.id).subscribe(()=>{
      this.dialogRef.close()
    })
  }

}
