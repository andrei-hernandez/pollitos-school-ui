import { Component, ChangeDetectionStrategy, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Course } from '../../../../../shared/modules/course.model';
import { CourseService } from '../../../service/course.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-course',
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() school?: string;
  @Input() course: Course = {
    id: 0,
    nameCourse: '',
    professorName: ''
  }

  auxSchool: string = '';
  
  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }
    console.log(this.course);
  }

  
  private courseService = inject(CourseService);

  createCourse(){
    this.courseService.addCourse(this.auxSchool, this.course);
  }

}
