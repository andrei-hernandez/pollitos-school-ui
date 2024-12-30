import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {StudentModel} from "../../../../core/models/student.model"

@Injectable({
  providedIn: 'root',
})
export class StudentServiceGerardoInstitute {
  private baseUrl = 'http://localhost:8080/school/api/GerardoInstitute'
  private http = inject(HttpClient)

  constructor() {}

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.baseUrl}/student`)
  }

  getStudentById(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/student/${id}`)
  }

  createStudent(studentData: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/student`, studentData)
  }

  updateStudent(id: number, studentData: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/student/${id}`, studentData)
  }

  deleteStudent(id: number): Observable<any> {
    console.log(this.baseUrl +'/grade/student/'+ id)
    return this.http.delete(`${this.baseUrl}/grade/student/${id}`)
  }

}
