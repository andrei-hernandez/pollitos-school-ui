import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {StudentModel} from "../../../../core/models/student.model"

@Injectable({
  providedIn: 'root',
})
export class StudentServiceGerardoInstitute {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/gerardoinstitute/student`)
  }

  getStudentById(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/gerardoinstitute/student/${id}`)
  }

  createStudent( studentData: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/gerardoinstitute/student`, studentData)
  }

  updateStudent(id: number, studentData: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/gerardoinstitute/student/${id}`, studentData)
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/gerardoinstitute/student/${id}`)
  }
}
