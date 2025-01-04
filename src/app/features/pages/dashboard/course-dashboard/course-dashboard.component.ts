import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-course-dashboard',
  imports: [
    CommonModule, 
    RouterLinkWithHref, 
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './course-dashboard.component.html',
  styleUrl: './course-dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CourseDashboardComponent {
  @Input() school?: string;
}
