import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {GradeModel} from "../../../../core/models/grade.model"
import {NewGradeModel} from "../../../../core/models/newGrade.model"

@Injectable({
  providedIn: 'root',
})
export class GradeServiceGerardoInstitute {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getGradeByStudentId(id: number): Observable<GradeModel[]> {
    return this.http.get<GradeModel[]>(`${this.baseUrl}/GerardoInstitute/grade/student/${id}`)
  }

  createGrade(gradeData: NewGradeModel): Observable<GradeModel> {
    return this.http.post<GradeModel>(`${this.baseUrl}/GerardoInstitute/grade`, gradeData)
  }

  updateGrade(id: number, gradeData: GradeModel): Observable<GradeModel> {
    return this.http.put<GradeModel>(`${this.baseUrl}/GerardoInstitute/grade/${id}`, gradeData)
  }

}
