import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {GradeModel} from "../../../core/models/grade.model"
import {NewGradeModel} from "../../../core/models/newGrade.model"

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getGradeByStudentId(id: number, institute: string): Observable<GradeModel[]> {
    return this.http.get<GradeModel[]>(`${this.baseUrl}/${institute}/grade/student/${id}`)
  }

  createGrade(gradeData: NewGradeModel, institute: string): Observable<GradeModel> {
    return this.http.post<GradeModel>(`${this.baseUrl}/${institute}/grade`, gradeData)
  }

}
