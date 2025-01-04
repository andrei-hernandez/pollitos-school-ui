import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GerardoService } from '../../../Institute/services/gerardoInstituteStudents.service';
import { GerardoServiceGrades } from '../../../Institute/services/gerardoInstituteGrades.service';
import { GerardoInterface, gradeInterface } from '../../../../core/models/gerardoInstitute.interface'
import { SidebarComponent } from '../../../Institute/components/sidebar/sidebar.component'

@Component({
  selector: 'app-grades',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, DatePipe,SidebarComponent],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css',
  providers: [GerardoService, GerardoServiceGrades]
})
export class GradesComponent implements OnInit{
  currentStundentID!: number;

  isUpgradedButtonClicked: boolean = false;

  studentGrades: gradeInterface [] = [];
  ////////////////MOSTRAR DATA/////////////////////////////
  estudiantes: GerardoInterface[] = [];

  constructor(private gerardoService: GerardoService, private gerardoServiceGrades: GerardoServiceGrades) {
  }

  ngOnInit() {
    this.loadAll();
  }

  /////////////////////////FORMULARIO//////////////////////////////
  private fb = inject(FormBuilder);
  private router = inject(Router)
  private contactService = inject(GerardoService)

  form = this.fb.group({
    id: ['', [Validators.required]],
    score: ['', [Validators.required]],
    studentId: ['', [Validators.required]],
    courseId: ['', [Validators.required]],
  })


  create() {
    console.log("se mando")
    this.gerardoServiceGrades.create(this.form.value)
      .subscribe({
        next:()=>{
          this.form.reset();
          console.log(this.currentStundentID, "id")
          this.getStudentGrades(this.currentStundentID);
        }
      })
  }

  loadAll(){
    this.gerardoService.getStudents()
    .subscribe(estudiante => {
      this.estudiantes = estudiante;
    })
  }

  deleteStudent(estudiantes: GerardoInterface){
    this.contactService.delete(estudiantes.id)
    .subscribe(()=> {
      this.loadAll();
    })
  }

  fillStudent(student: any){
    this.isUpgradedButtonClicked = true;
    this.currentStundentID = student.id;
    this.form.controls["id"].patchValue(student.id)
    this.form.controls["id"].disable()
    this.form.controls["score"].patchValue(student.score)
    this.form.controls["studentId"].patchValue(student.studentId)
    this.form.controls["courseId"].patchValue(student.courseId)
  }

  updateStudent(){
    this.contactService.update(this.currentStundentID ,this.form.value).subscribe({
      next:()=>{
        this.loadAll();
      }
    })
  }

  cancelUpdate(){
    this.isUpgradedButtonClicked = false;
    this.form.reset();
    this.form.controls["id"].enable()
  }

  ///////////////////////////////////////////////
  getStudentGrades(student: any){
    this.currentStundentID = student;
    console.log(this.currentStundentID);
    this.gerardoServiceGrades.getGrades(this.currentStundentID).subscribe({
      next: (data)=>{
        console.log(data.grades);
        this.studentGrades= data.grades;
      }
    })

  }
  
}
