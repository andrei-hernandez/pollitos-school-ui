import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GradeService} from '../../services/grade.service';

@Component({
  selector: 'app-grades-form-delete-all-grades-of-course',
  imports: [],
  templateUrl: './grades-form-delete-all-grades-of-course.component.html',
  styleUrl: './grades-form-delete-all-grades-of-course.component.css'
})
export class GradesFormDeleteAllGradesOfCourseComponent {

  constructor(
    public  dialogRef: MatDialogRef<GradesFormDeleteAllGradesOfCourseComponent>,
    private gradeService: GradeService,
    @Inject(MAT_DIALOG_DATA)
    public data:{
      id: number,
      courseId: number,
    }
  ){}

  close(){
    this.dialogRef.close()
  }

  onDeleteAllGradesOfCourse(){
    this.gradeService.deleteAllGradesOfCourse(this.data.id).subscribe(() => {
      this.dialogRef.close()
    })
  }

}
