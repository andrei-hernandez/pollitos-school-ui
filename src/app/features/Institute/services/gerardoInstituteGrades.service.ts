import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {GerardoInterface, gradeInterface  } from '../../../core/models/gerardoInstitute.interface'

@Injectable({
  providedIn: 'root'
})

export class GerardoServiceGrades {
  private http = inject(HttpClient)
  constructor(private httpClient: HttpClient) {

  }

  getGrades(id: number) {
    return this.http.get<any>(`http://localhost:8080/students/${id}/grades`);
  }

  create(grade: any) {
    return this.http.post<any>('http://localhost:8080/grades', grade);
  }



}