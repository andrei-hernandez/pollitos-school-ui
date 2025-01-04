import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { Student } from '../../../../../shared/modules/student.model';
import { StudentServiceService } from '../../../../students/services/student.service.service';

import { Course } from '../../../../../shared/modules/course.model';
import { CourseService } from '../../../../courses/service/course.service';

import { Grade } from '../../../../../shared/modules/grade.model';
import { GradesService } from '../../../services/grades.service';

@Component({
  selector: 'app-grade',
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.css'
})
export class GradeComponent {
  @Input() school?: string;
  @Input() grade: Grade = {
    id: 0,
    studentId: 0,
    courseId: 0,
    score: 0
  }

  auxSchool: string = '';
  students = signal<Student[]>([]);
  courses = signal<Course[]>([]);

  private studentService = inject(StudentServiceService);
  private courseService = inject(CourseService);
  private gradeService = inject(GradesService);

  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }
    this.getStudents();
    this.getCourses();
  }

  getStudents(){
    this.studentService.getStudents(this.auxSchool)
    .subscribe({
      next: (students) => {
        this.students.set(students);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getCourses(){
    this.courseService.getCourses(this.auxSchool)
    .subscribe({
      next: (courses) => {
        this.courses.set(courses);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addGrade(){
    this.gradeService.addGrade(this.auxSchool, this.grade);
  }


}
