import { ChangeDetectionStrategy, Component, Inject, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../../components/form/course/course.component';
import { Course } from '../../../../shared/modules/course.model';
import { CourseService } from '../../service/course.service';
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


@Component({
  selector: 'app-edit',
  imports: [
    CommonModule,
    CourseComponent,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent {
  @Input() school?: string;
  @Input() course: Course = {
    id: 0,
    nameCourse: '',
    professorName: ''
  }

  readonly dialogRef = inject(MatDialogRef<EditComponent>);
  private courseService = inject(CourseService);

  ngOnInit(){
    this.course = this.data.course;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  saveCourse(){
    this.courseService.putCourse(this.data.school, this.course)
    .subscribe({
      next: (update) => {
        this.dialogRef.close(update);
      },
      error: (err) => {
        console.error('Error => ',err);
      }
    });
  }
}
