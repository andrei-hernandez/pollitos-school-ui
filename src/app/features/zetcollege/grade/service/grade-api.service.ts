import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {GradeModel} from "../../../../core/models/grade.model"

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  private baseUrl = 'http://localhost:8080/school/api'

  constructor(private http: HttpClient) {}

  getAllGrades(): Observable<GradeModel[]> {
    return this.http.get<GradeModel[]>(`${this.baseUrl}/zetcollege/grade`)
  }

  getGradeById( id: number): Observable<GradeModel> {
    return this.http.get<GradeModel>(`${this.baseUrl}/zetcollege/grade/${id}`)
  }

  createGrade( gradeData: GradeModel): Observable<GradeModel> {
    return this.http.post<GradeModel>(`${this.baseUrl}/zetcollege/grade`, gradeData)
  }

  updateGrade( id: number, gradeData: GradeModel): Observable<GradeModel> {
    return this.http.put<GradeModel>(`${this.baseUrl}/zetcollege/grade/${id}`, gradeData)
  }

  deleteGrade( id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/zetcollege/grade/${id}`)
  }
}
