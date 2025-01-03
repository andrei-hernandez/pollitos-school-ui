import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { GerardoInterface } from '../../../core/models/gerardoInstitute.interface'

@Injectable({
  providedIn: 'root'
})

export class GerardoService {
  private http = inject(HttpClient)
  constructor(private httpClient: HttpClient) {

  }

  getStudents() {
    return this.http.get<GerardoInterface[]>('http://localhost:8080/students');
  }

  create(estudiante: any) {
    return this.http.post<GerardoInterface>('http://localhost:8080/students', estudiante);
  }

  update(id: number, estudiante: any) {
    return this.http.put<GerardoInterface>(`http://localhost:8080/students/${id}`, estudiante);
  }

  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/students/${id}/grades`);
  }

}