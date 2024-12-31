import { Component, OnInit, signal } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent{
form = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  age: new FormControl(''),
  date: new FormControl('')
})

students = signal ([
  {id: 1, name: "Español", age: 24, date: "18-Agosto-2018" },
  { id: 2, name: "Geografia", age: 44, date: "18-Agosto-1997" },
  { id: 3, name: "Ciencias", age: 46, date: "18-Agosto-1995"},
  { id: 4, name: "Educacion fisica", age: 20, date: "18-Agosto-2048"},
]);

handleSubmit(){
  console.log(this.form.value);
}

}