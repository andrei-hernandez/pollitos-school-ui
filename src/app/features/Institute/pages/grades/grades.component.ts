import { Component,inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GerardoService } from '../../services/gerardoInstitute.service'
import { GerardoInterface } from '../../../../core/models/gerardoInstitute.interface'
import { SidebarComponent } from '../../components/sidebar/sidebar.component'

@Component({
  selector: 'app-grades',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, DatePipe,SidebarComponent],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css',
  providers: [GerardoService]
})
export class GradesComponent implements OnInit{
  currentStundentID!: number;

  isUpgradedButtonClicked: boolean = false;
  ////////////////MOSTRAR DATA/////////////////////////////
  estudiantes: GerardoInterface[] = [];

  constructor(private gerardoService: GerardoService) {
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
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
  })

  create() {
    console.log("se mando")
    const contact = this.form.value;
    this.contactService.create(contact)
      .subscribe({
        next:()=>{
          this.form.reset();
          this.loadAll();
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
    this.form.controls["firstName"].patchValue(student.firstName)
    this.form.controls["lastName"].patchValue(student.lastName)
    this.form.controls["age"].patchValue(student.age)
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
}

