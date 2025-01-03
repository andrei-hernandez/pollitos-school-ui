import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { GerardoInterfaceCourses } from '../../../core/models/gerardoInstituteCourses.interface'

@Injectable({
  providedIn: 'root'
})

export class GerardoServiceCourses {
  private http = inject(HttpClient)
  constructor(private httpClient: HttpClient) {

  }

  getCourses() {
    return this.http.get<GerardoInterfaceCourses[]>('http://localhost:8080/course');
  }

  create(curso: any) {
    return this.http.post<GerardoInterfaceCourses>('http://localhost:8080/course', curso);
  }

  update(id: number, curso: any) {
    return this.http.put<GerardoInterfaceCourses>(`http://localhost:8080/course/${id}`, curso);
  }

  delete(id: number) {
    return this.http.delete<void>(`http://localhost:8080/course/${id}/grades`);
  }

}