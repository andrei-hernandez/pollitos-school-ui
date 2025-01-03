import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GerardoServiceCourses } from '../../../Institute/services/gerardoInstituteCourses.service'
import { GerardoInterfaceCourses } from '../../../../core/models/gerardoInstituteCourses.interface'
import { SidebarComponent } from '../../../Institute/components/sidebar/sidebar.component'

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, DatePipe, SidebarComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  currentCoursesID!: number;

  isUpgradedButtonClicked: boolean = false;
  ////////////////MOSTRAR DATA/////////////////////////////
  cursos: GerardoInterfaceCourses[] = [];

  constructor(private gerardoService: GerardoServiceCourses) {
  }

  ngOnInit() {
    this.loadAll();
  }

  /////////////////////////FORMULARIO//////////////////////////////
  private fb = inject(FormBuilder);
  private contactService = inject(GerardoServiceCourses);

  form = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    professorName: ['', [Validators.required]],
  })

  create() {
    console.log("se mando")
    const course = this.form.value;
    this.contactService.create(course)
      .subscribe({
        next: () => {
          this.form.reset();
          this.loadAll();
        }
      })
  }

  loadAll() {
    this.gerardoService.getCourses()
      .subscribe(curso => {
        this.cursos = curso;
      })
  }

  deleteStudent(cursos: GerardoInterfaceCourses) {
    this.contactService.delete(cursos.id)
      .subscribe(() => {
        this.loadAll();
      })
  }

  fillStudent(student: any) {
    this.isUpgradedButtonClicked = true;
    this.currentCoursesID = student.id;
    this.form.controls["id"].patchValue(student.id)
    this.form.controls["id"].disable()
    this.form.controls["name"].patchValue(student.name)
    this.form.controls["professorName"].patchValue(student.professorName)
  }

  updateStudent() {
    this.contactService.update(this.currentCoursesID, this.form.value).subscribe({
      next: () => {
        this.loadAll();
      }
    })
  }

  cancelUpdate() {
    this.isUpgradedButtonClicked = false;
    this.form.reset();
    this.form.controls["id"].enable()
  }

  deleteGrades(curso: any){
    console.log("OK")
    this.contactService.delete(curso.id).subscribe(()=>{
      alert(`Calificaciones Eliminadas del curso con el id: ${curso.id}`)
      console.log("Calificaciones Eliminadas del estudiante con el id: ",curso.id)
    });
  }

}

