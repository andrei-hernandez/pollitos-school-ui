import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../../components/form/course/course.component';
import { Course } from '../../../../shared/modules/course.model';

@Component({
  selector: 'app-created',
  imports: [CommonModule, CourseComponent],
  templateUrl: './created.component.html',
  styleUrl: './created.component.css'
})
export default class CreatedComponent {
  @Input() school?: string;

  course = signal<Course[]>([]);
}
