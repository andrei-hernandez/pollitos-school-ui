import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GradeData } from '../../../../shared/modules/grade.data';
import { GradesService } from '../../services/grades.service';
import { Grade } from '../../../../shared/modules/grade.model';
import { Student } from '../../../../shared/modules/student.model';
import { StudentServiceService } from '../../../students/services/student.service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatTableModule, 
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  @Input() school?: string;
  @Input() studenId: number = 0;
  auxSchool: string = '';

  gradeData = signal<GradeData[]>([]);
  students = signal<Student[]>([]);

  private gradeService = inject(GradesService);
  private studentService = inject(StudentServiceService);

  displayedColumns: string[] = [
    'student',
    'age',
    'nameCourse',
    'professorName',
    'score'
  ];
  dataSource = new MatTableDataSource<GradeData>([])
  
  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }
    this.getStudents();
  }

  onSelectionChange(event: any) {
    this.getDataGrade()
    // Aquí puedes hacer lo que desees con el valor seleccionado
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

  getDataGrade(){
    this.gradeService.getGradeStudentId(this.auxSchool, this.studenId)
    .subscribe({
      next: (data) => {
        this.gradeData.set(data);
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
