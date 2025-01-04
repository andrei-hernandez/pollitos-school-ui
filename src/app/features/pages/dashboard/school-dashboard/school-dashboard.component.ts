import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-school-dashboard',
  imports: [
    CommonModule, 
    RouterLinkWithHref,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './school-dashboard.component.html',
  styleUrl: './school-dashboard.component.css'
})
export default class SchoolDashboardComponent {

}
