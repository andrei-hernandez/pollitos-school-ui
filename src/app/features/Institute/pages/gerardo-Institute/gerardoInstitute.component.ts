import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { GerardoService } from '../../services/gerardoInstitute.service'
import { SidebarComponent } from '../../components/sidebar/sidebar.component'


@Component({
  selector: 'app-gerardoInstitute',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, DatePipe,SidebarComponent,RouterOutlet],
  templateUrl: './gerardoInstitute.component.html',
  styleUrl: './gerardoInstitute.component.css',
  providers: [GerardoService]
})
export class GerardoInstituteComponent{
  
}