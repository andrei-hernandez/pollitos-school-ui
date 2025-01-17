import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../../core/models/student.model';
import { Grade } from '../../../core/models/grade.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);

  constructor() {}

  getStudents(schoolSelected: string) {
    const url = new URL(
      `http://localhost:8080/school/${schoolSelected}/allStudents`,
    );
    return this.http.get<Student[]>(url.toString());
  }

  getGrades(studentId: number, schoolSelected: string) {
    const url = new URL(
      `http://localhost:8080/school/${schoolSelected}/${studentId}/allGradesOfStudent`,
    );
    return this.http.get<Grade[]>(url.toString());
  }

  addStudent(newStudent: Student) {
    const url = `http://localhost:8080/school/newStudent`;
    return this.http.post<string>(url, newStudent, {
      responseType: 'text' as 'json',
    });
  }

  deleteAllGradesStudent(studentId: number) {
    const url = `http://localhost:8080/school/${studentId}/eraseAllGradesOfStudent`;
    return this.http.delete<string>(url, {
      responseType: 'text' as 'json',
    });
  }

  deleteStudent(studentId: number) {
    const url = `http://localhost:8080/school/${studentId}/eraseStudent`;
    return this.http.delete<string>(url, {
      responseType: 'text' as 'json',
    });
  }

  editStudent(studentToEdit: Student) {
    const url = `http://localhost:8080/school/editStudent`;
    return this.http.put<string>(url, studentToEdit, {
      responseType: 'text' as 'json',
    });
  }
}
