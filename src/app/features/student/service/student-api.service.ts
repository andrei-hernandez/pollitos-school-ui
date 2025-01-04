import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {StudentModel} from "../../../core/models/student.model"

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/school/api'
  private http = inject(HttpClient)

  constructor() {}

  getAllStudents(institute: string): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/${institute}/student`)
  }

  getStudentById(id: number,institute: string): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/${institute}/student/${id}`)
  }

  createStudent(studentData: StudentModel, institute: string): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/${institute}/student`, studentData)
  }

  updateStudent(id: number, studentData: StudentModel, institute: string): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/${institute}/student/${id}`, studentData)
  }

  //Delete Student in Grade
  deleteStudent(id: number, institute: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${institute}/grade/student/${id}`)
  }

}
