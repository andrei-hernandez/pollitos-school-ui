import { inject, Injectable, signal } from '@angular/core';
import { Student } from '../../../shared/modules/student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private http = inject(HttpClient);

  constructor() { }

  addStudent(school:string, student: Student){
    const url = new URL('http://localhost:8080/app/'+ school +'/student');
    return this.http.post(url.toString(), student).subscribe({
      next: (response: any) => {
        console.log(response.message);
      },
      error: (err) =>{
        console.log("error => ",err);
      }
    });
  }

  getStudents(school:string){
    const url = new URL('http://localhost:8080/app/'+ school +'/student');
    return this.http.get<Student[]>(url.toString());
  }

  putStudent(school:string, student: Student){
    const url = new URL('http://localhost:8080/app/' + school + '/student/' + student.id);
    return this.http.put<Student>(url.toString(),student);
  }
}
