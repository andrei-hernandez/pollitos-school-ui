import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grade-dashboard',
  imports: [
    CommonModule, 
    RouterLinkWithHref,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './grade-dashboard.component.html',
  styleUrl: './grade-dashboard.component.css'
})
export default class GradeDashboardComponent {
  @Input() school?: string;
}
