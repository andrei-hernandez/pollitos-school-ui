import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../../components/student/student.component';
import { Student } from '../../../../shared/modules/student.model';

@Component({
  selector: 'app-created-student',
  imports: [CommonModule, StudentComponent],
  templateUrl: './created-student.component.html',
  styleUrl: './created-student.component.css'
})
export default class CreatedStudentComponent {
  @Input() school?: string;

  student = signal<Student[]>([]);
  
}
