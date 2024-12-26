import {Component, Input} from '@angular/core'
import {RouterLink} from "@angular/router"

@Component({
  selector: 'app-school-header',
    imports: [
    RouterLink
    ],
  templateUrl: './school-header.component.html',
  styleUrl: './school-header.component.css'
})
export class SchoolHeaderComponent {
  @Input() schoolName: string = 'My Application'

}
