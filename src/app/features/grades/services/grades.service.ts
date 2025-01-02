import { inject, Injectable } from '@angular/core';
import { Grade } from '../../../shared/modules/grade.model';
import { GradeData } from '../../../shared/modules/grade.data';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../../shared/modules/student.model';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private http = inject(HttpClient);

  constructor() { }

  addGrade(school: string, grade: Grade){
    console.log(grade);
    const url = new URL('http://localhost:8080/app/' + school + '/grade');
    return this.http.post(url.toString(), grade).subscribe({
      next: (response: any) => {
        console.log(response.message);
      },
      error: (err) => {
        console.error('error => ', err);
      }
    });
  }

  getGradeStudentId(school:string, studenId: number){
    console.log('http://localhost:8080/app/' + school + '/grade/student/' + studenId);
    const url = new URL('http://localhost:8080/app/' + school + '/grade/student/' + studenId);
    return this.http.get<GradeData[]>(url.toString());
  }
}
