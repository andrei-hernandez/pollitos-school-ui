import { Component } from '@angular/core'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-default-header',
  imports: [
    RouterLink
  ],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.css'
})
export class DefaultHeaderComponent {

}
