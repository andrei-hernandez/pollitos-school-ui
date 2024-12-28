import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {StudentModel} from "../../../../core/models/student.model"

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/zetcollege/course`)
  }

  getCourseById( id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/zetcollege/course/${id}`)
  }

  createCourse( courseData: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/zetcollege/course`, courseData)
  }

  updateCourse( id: number, courseData: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/zetcollege/course/${id}`, courseData)
  }

  deleteCourse( id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/zetcollege/course/${id}`)
  }
}
