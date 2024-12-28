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

  getAllGrades(school: string): Observable<GradeModel[]> {
    return this.http.get<GradeModel[]>(`${this.baseUrl}/${school}/grade`)
  }

  getGradeById(school: string, id: number): Observable<GradeModel> {
    return this.http.get<GradeModel>(`${this.baseUrl}/${school}/grade/${id}`)
  }

  createGrade(school: string, gradeData: GradeModel): Observable<GradeModel> {
    return this.http.post<GradeModel>(`${this.baseUrl}/${school}/grade`, gradeData)
  }

  updateGrade(school: string, id: number, gradeData: GradeModel): Observable<GradeModel> {
    return this.http.put<GradeModel>(`${this.baseUrl}/${school}/grade/${id}`, gradeData)
  }

  deleteGrade(school: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${school}/grade/${id}`);
  }
}
