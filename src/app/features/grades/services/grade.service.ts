import {inject, Injectable} from '@angular/core';
import {Grade} from '../../../core/models/grade.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private http = inject(HttpClient)

    getGrades(schoolSelected: string){
      const url = new URL(`http://localhost:8080/school/${schoolSelected}/allGrades`)
      return this.http.get<Grade[]>(url.toString())
    }

    addGrade(newGrade: Grade) {
      const url = `http://localhost:8080/school/newGrade`;
      return this.http.post<string>(url, newGrade, {
        responseType: 'text' as 'json'
      });
    }

    deleteGrade(gradeId: number){
      const url = `http://localhost:8080/school/${gradeId}/eraseGrade`;
      return this.http.delete<string>(url,{
        responseType: 'text' as 'json'
      });
  }

    editGrade(gradeToEdit: Grade){
      const url = `http://localhost:8080/school/editGrade`;
      return this.http.put<string>(url, gradeToEdit,{
        responseType: 'text' as 'json'
      })
  }

  deleteAllGradesOfCourse(gradeId: number){
    const url = `http://localhost:8080/school/${gradeId}/eraseAllGradesOfCourse`;
    return this.http.delete<string>(url,{
      responseType: 'text' as 'json'
    })
  }





}
