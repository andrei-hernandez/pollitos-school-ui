import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../Institute/components/sidebar/sidebar.component';



@Component({
  selector: 'app-college',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, DatePipe,SidebarComponent,RouterOutlet],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent {

}
