import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {CourseModel} from "../../../core/models/course.model"

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllCourses(school: string): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${this.baseUrl}/${school}/course`)
  }

  getCourseById(id: number, school: string): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${this.baseUrl}/${school}/course/${id}`)
  }

  createCourse(courseData: CourseModel, school: string): Observable<CourseModel> {
    return this.http.post<CourseModel>(`${this.baseUrl}/${school}/course`, courseData)
  }

  updateCourse(id: number, courseData: CourseModel, school: string): Observable<CourseModel> {
    console.log('updateCourse', id, courseData)
    return this.http.put<CourseModel>(`${this.baseUrl}/${school}/course/${id}`, courseData)
  }

  //Delete Course in Grade
  deleteCourse(id: number, school: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${school}/grade/course/${id}`)
  }
}
