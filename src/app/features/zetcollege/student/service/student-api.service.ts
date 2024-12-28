import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {StudentModel} from "../../../../core/models/student.model"

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllStudents(school: string): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/${school}/student`)
  }

  getStudentById(school: string, id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/${school}/student/${id}`)
  }

  createStudent(school: string, studentData: any): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/${school}/student`, studentData)
  }

  updateStudent(school: string, id: number, studentData: any): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/${school}/student/${id}`, studentData)
  }

  deleteStudent(school: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${school}/student/${id}`)
  }
}
