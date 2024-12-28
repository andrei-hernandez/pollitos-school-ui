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

  getAllCourses(school: string): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/${school}/course`)
  }

  getCourseById(school: string, id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/${school}/course/${id}`)
  }

  createCourse(school: string, courseData: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/${school}/course`, courseData)
  }

  updateCourse(school: string, id: number, courseData: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/${school}/course/${id}`, courseData)
  }

  deleteCourse(school: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${school}/course/${id}`);
  }
}
