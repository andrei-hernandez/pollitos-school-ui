import {inject, Injectable} from '@angular/core';
import {Course} from '../../../core/models/course.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private http = inject(HttpClient)

  getCourses(schoolSelected: string){
    const url = new URL(`http://localhost:8080/school/${schoolSelected}/allCourses`)
    return this.http.get<Course[]>(url.toString())
  }

  addCourse(newCourse: Course) {
    const url = `http://localhost:8080/school/newCourse`;
    return this.http.post<string>(url, newCourse, {
      responseType: 'text' as 'json'
    });
  }

  deleteCourse(courseId: number){
    const url = `http://localhost:8080/school/${courseId}/eraseCourse`;
    return this.http.delete<string>(url,{
      responseType: 'text' as 'json'
    });
  }

  editCourse(courseToEdit: Course){
    const url = `http://localhost:8080/school/editCourse`;
    return this.http.put<string>(url, courseToEdit,{
      responseType: 'text' as 'json'
    })
  }
}
