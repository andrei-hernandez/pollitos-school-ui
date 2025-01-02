import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {CourseModel} from "../../../../core/models/course.model"

@Injectable({
  providedIn: 'root',
})
export class CourseServiceGerardoInstitute {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${this.baseUrl}/GerardoInstitute/course`)
  }

  getCourseById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${this.baseUrl}/GerardoInstitute/course/${id}`)
  }

  createCourse(courseData: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(`${this.baseUrl}/GerardoInstitute/course`, courseData)
  }

  updateCourse(id: number, courseData: CourseModel): Observable<CourseModel> {
    console.log('updateCourse', id, courseData)
    return this.http.put<CourseModel>(`${this.baseUrl}/GerardoInstitute/course/${id}`, courseData)
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/GerardoInstitute/course/${id}`)
  }
}
