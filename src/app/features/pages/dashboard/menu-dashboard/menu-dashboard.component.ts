import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-dashboard',
  imports: [
    CommonModule, 
    RouterLinkWithHref,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './menu-dashboard.component.html',
  styleUrl: './menu-dashboard.component.css'
})
export default class MenuDashboardComponent {
  @Input() school?: string;
}
