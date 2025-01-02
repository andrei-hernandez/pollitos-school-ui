import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from "../../components/form/grade/grade.component";

@Component({
  selector: 'app-created',
  imports: [
    CommonModule,
    GradeComponent
  ],
  templateUrl: './created.component.html',
  styleUrl: './created.component.css'
})
export default class CreatedComponent {
@Input() school?: string;
}
