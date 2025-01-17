import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-courses-form-delete',
  imports: [],
  templateUrl: './courses-form-delete.component.html',
  styleUrl: './courses-form-delete.component.css'
})
export class CoursesFormDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef <CoursesFormDeleteComponent>,
    private courseService:CourseService,
    @Inject(MAT_DIALOG_DATA)
    public data:{
      id: number,
      name: string,
      professorName: string,
      schoolActive: string,
    }
  ){}

  close(){
    this.dialogRef.close()
  }

  onDeleteCourse(){
    this.courseService.deleteCourse(this.data.id).subscribe(()=>{
      this.dialogRef.close()
    })
  }

}
