import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../../shared/modules/course.model';
import { CourseService } from '../../service/course.service';
import { EditComponent } from '../../pages/edit/edit.component';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-courses',
  imports: [
    CommonModule, 
    MatTableModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export default class ListCoursesComponent {
  @Input() school?: string;
  auxSchool: string = '';

  courses = signal<Course[]>([]);
  private coursesService = inject(CourseService);
  displayedColumns: string[] = ['id','nameCourse', 'professorName', 'option'];
  dataSource = new MatTableDataSource<Course>([]);

  readonly dialog = inject(MatDialog);

  constructor(private dialogEdit: MatDialog){}

  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }

    this.getCourses();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, course: Course){
    const dialogRef = this.dialogEdit.open(EditComponent, {
      width: '560px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { course: course, school: this.school }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
          this.getCourses();
        }
      }
    );
  }

  getCourses(){
    this.coursesService.getCourses(this.auxSchool)
    .subscribe({
      next: (courses) => {
        this.courses.set(courses);
        this.dataSource.data = courses;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
