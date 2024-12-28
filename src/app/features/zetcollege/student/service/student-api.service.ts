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

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/zetcollege/student`)
  }

  getStudentById( id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/zetcollege/student/${id}`)
  }

  createStudent( studentData: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/zetcollege/student`, studentData)
  }

  updateStudent( id: number, studentData: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/zetcollege/student/${id}`, studentData)
  }

  deleteStudent( id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/zetcollege/student/${id}`)
  }
}
