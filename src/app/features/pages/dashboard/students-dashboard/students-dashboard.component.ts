import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-students-dashboard',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLinkWithHref],
  templateUrl: './students-dashboard.component.html',
  styleUrl: './students-dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class StudentsDashboardComponent {
  @Input() school?: string;
}
