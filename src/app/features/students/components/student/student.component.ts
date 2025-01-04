import { Component, inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../shared/modules/student.model';
import { StudentServiceService } from '../../services/student.service.service';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-student',
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent {
  @Input() school?: string;
  @Input() id: number = 0;
  @Input() student: Student = {
    id: 0,
    firstName: '',
    lastName:'',
    age: 0
   }

  auxSchool: string = '';

  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }
    
  }

  private  studentService = inject(StudentServiceService);


  createStudent(){
    this.studentService.addStudent(this.auxSchool, this.student);
  }

}
