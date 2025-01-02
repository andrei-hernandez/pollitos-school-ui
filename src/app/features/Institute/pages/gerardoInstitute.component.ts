import { Component, OnInit, signal } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GerardoService } from '../services/gerardoInstitute.service'
import { GerardoInterface } from '../../../core/models/gerardoInstitute.interface'


@Component({
  selector: 'app-gerardoInstitute',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './gerardoInstitute.component.html',
  styleUrl: './gerardoInstitute.component.css',
  providers: [GerardoService]
})
export class GerardoInstituteComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    date: new FormControl('')
  })

  students = signal([
    { id: 1, name: "Eduardo Emmanuel Gonzalez Vazquez", age: 24, date: "18-Agosto-2018" },
    { id: 2, name: "Gerardo Emmanuel Gonzalez Orea", age: 44, date: "18-Agosto-1997" },
    { id: 3, name: "Claudia Vazquez Montero", age: 46, date: "18-Agosto-1995" },
    { id: 4, name: "Eden Emmanuel Gonzalez Carrasco", age: 20, date: "18-Agosto-2048" },
  ]);

  handleSubmit() {
    console.log(this.form.value);
  }

  ////////////////MOSTRAR DATA/////////////////////////////
  estudiantes: any[] = [];

  constructor(private gerardoService: GerardoService) {
  }

  ngOnInit(){
    this.gerardoService.getStudents()
    .subscribe((estudiante: any) => {
      this.estudiantes = estudiante;
    }
    )
  
    this.gerardoService.getStudents().subscribe((data) => console.log(data))}

}