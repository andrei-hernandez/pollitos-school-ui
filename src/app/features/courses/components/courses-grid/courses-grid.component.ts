import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {Course} from '../../../../core/models/course.model';
import {CourseService} from '../../services/course.service';
import {CoursesFormAddComponent} from '../courses-form-add/courses-form-add.component';
import {CoursesFormDeleteComponent} from '../courses-form-delete/courses-form-delete.component';
import {CoursesFormEditComponent} from '../courses-form-edit/courses-form-edit.component';

@Component({
  selector: 'app-courses-grid',
  imports: [CommonModule],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.css'
})
export default class CoursesGridComponent {
  constructor( public dialog: MatDialog,){}

  courses = signal<Course[]>([])

  activeSchool = signal<string>("")

  private courseService = inject(CourseService)


  allCourses(){
    this.courseService.getCourses(this.activeSchool() || 'GerardoInstitute').subscribe({
      next: (courses) =>{
        this.courses.set(courses)
        console.table(courses)
      },
      error: (error) => {}
    })
  }

  createCourse(){
    const dialogRef = this.dialog.open(CoursesFormAddComponent, {
      width: '1000px',
      data: {
        activeSchool: this.activeSchool()
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.allCourses();
    })
  }

  deleteCourse(course: Course){
    const dialogRef = this.dialog.open(CoursesFormDeleteComponent, {
      width: '650px',
      data:{
        id: course.id,
        name: course.name,
        professorName: course.professorName,
        schoolActive: this.activeSchool()
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.allCourses();
    })

  }

  updateCourse(course: Course){
    const dialogRef = this.dialog.open(CoursesFormEditComponent,{
      width: '1000px',
      data:{
        activeSchool: this.activeSchool(),
        courseToEdit: course
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.allCourses();
    })

  }


  selectedSchool(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.activeSchool.set(selectedValue)
    selectedValue === 'GerardoInstitute' || selectedValue === 'ZetCollege'
      ? this.allCourses()
      : console.error('No school has been selected');
  }
}
