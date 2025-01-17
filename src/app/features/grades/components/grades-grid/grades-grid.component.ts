import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {Grade} from '../../../../core/models/grade.model';
import {GradeService} from '../../services/grade.service';
import {GradesFormAddComponent} from '../grades-form-add/grades-form-add.component';
import {GradesFormEditComponent} from '../grades-form-edit/grades-form-edit.component';
import {GradesFormDeleteComponent} from '../grades-form-delete/grades-form-delete.component';
import {
  GradesFormDeleteAllGradesOfCourseComponent
} from '../grades-form-delete-all-grades-of-course/grades-form-delete-all-grades-of-course.component';

@Component({
  selector: 'app-grades-grid',
  imports: [CommonModule],
  templateUrl: './grades-grid.component.html',
  styleUrl: './grades-grid.component.css'
})
export default class GradesGridComponent {
  constructor( public dialog: MatDialog,){}

  grades = signal<Grade[]>([])

  activeSchool = signal<string>("")

  private gradeService = inject(GradeService)


  allGrades(){
    this.gradeService.getGrades(this.activeSchool() || 'GerardoInstitute').subscribe({
      next: (grades) =>{
        this.grades.set(grades)
        console.table(grades)
      },
      error: (error) => {}
    })
  }

  createGrade(){
    const dialogRef = this.dialog.open(GradesFormAddComponent, {
      width: '1000px',
      data: {
        activeSchool: this.activeSchool()
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.allGrades();
    })
  }

  deleteGrade(grade: Grade){
    const dialogRef = this.dialog.open(GradesFormDeleteComponent, {
      width: '650px',
      data:{
        id: grade.id,
        courseId: grade.courseId,
        score: grade.score,
        studentId: grade.studentId,
        schoolActive: this.activeSchool()
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.allGrades();
    })

  }

  updateGrade(grade: Grade){
    const dialogRef = this.dialog.open(GradesFormEditComponent,{
      width: '1000px',
      data:{
        activeSchool: this.activeSchool(),
        gradeToEdit: grade
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.allGrades();
    })

  }

  deleteAllGradesOfCourse(grade: Grade){
    const dialogRef = this.dialog.open(GradesFormDeleteAllGradesOfCourseComponent,{
      width: '650px',
      data:{
        id: grade.id,
        courseId: grade.courseId,
        score: grade.score,
        studentId: grade.studentId,
        schoolActive: this.activeSchool()
      }
    })

    dialogRef.afterClosed().subscribe(() => {
      this.allGrades()
    })
  }

  selectedSchool(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.activeSchool.set(selectedValue)
    selectedValue === 'GerardoInstitute' || selectedValue === 'ZetCollege'
      ? this.allGrades()
      : console.error('No school has been selected');
  }

}
