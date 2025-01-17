import { Component, inject, signal } from '@angular/core';
import { Student } from '../../../../core/models/student.model';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormAddComponent } from '../student-form-add/student-form-add.component';
import { StudentFormDeleteComponent } from '../student-form-delete/student-form-delete.component';
import { StudentFormEditComponent } from '../student-form-edit/student-form-edit.component';
import { StudentFormDeleteAllGradesComponent } from '../student-form-delete-all-grades/student-form-detele-all-grades.component';
import { StudentFormAllGradesComponent } from '../student-form-all-grades/student-form-all-grades.component';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export default class StudentsComponent {
  constructor(public dialog: MatDialog) {}

  students = signal<Student[]>([]);

  activeSchool = signal<string>('');

  private studentService = inject(StudentService);

  showAllGrades(student: Student) {
    const dialogRef = this.dialog.open(StudentFormAllGradesComponent, {
      width: '350px',
      data: {
        id: student.id,
        activeSchool: this.activeSchool(), //Pass the value of activeSchool
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  allStudents() {
    this.studentService
      .getStudents(this.activeSchool() || 'GerardoInstitute')
      .subscribe({
        next: (students) => {
          this.students.set(students);
          console.table(students);
        },
        error: (error) => {},
      });
  }

  createStudent() {
    const dialogRef = this.dialog.open(StudentFormAddComponent, {
      width: '1000px',
      data: {
        activeSchool: this.activeSchool(), // Pass the value of activeSchool
      },
    });

    dialogRef.componentInstance.studentAdded.subscribe(() => {
      this.allStudents(); // Update the list of students
    });
  }

  updateStudent(student: Student) {
    const dialogRef = this.dialog.open(StudentFormEditComponent, {
      width: '1000px',
      data: {
        activeSchool: this.activeSchool(),
        studentToEdit: student,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.allStudents();
    });
  }

  deleteAllGrades(student: Student) {
    const dialogRef = this.dialog.open(StudentFormDeleteAllGradesComponent, {
      width: '650px',
      data: {
        id: student.id,
        firstName: student.firstName,
        schoolId: this.activeSchool(),
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.allStudents();
    });
  }

  deleteStudent(student: Student) {
    const dialogRef = this.dialog.open(StudentFormDeleteComponent, {
      width: '650px',
      data: {
        id: student.id,
        firstName: student.firstName,
        schoolId: this.activeSchool(),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.allStudents();
    });
  }

  selectedSchool(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.activeSchool.set(selectedValue);
    selectedValue === 'GerardoInstitute' || selectedValue === 'ZetCollege'
      ? this.allStudents()
      : console.error('No school has been selected');
  }
}
