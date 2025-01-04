import { inject, Injectable } from '@angular/core';
import { Course } from '../../../shared/modules/course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private http = inject(HttpClient);

  constructor() { }

  addCourse(school:string, course: Course){
    const url = new URL('http://localhost:8080/app/' + school + '/course/');
    return this.http.post(url.toString(),course).subscribe({
      next: (response: any) => {
        console.log(response.message)
      },
      error: (err) => {
        console.log('error => ',err);
      }
    });
  }

  getCourses(school:string){
    const url = new URL('http://localhost:8080/app/' + school + '/course/');
    return this.http.get<Course[]>(url.toString());
  }

  putCourse(school:string, course: Course){
    const url = new URL('http://localhost:8080/app/' + school + '/course/' + course.id);
    return this.http.put<Course>(url.toString(),course);
  }
}
