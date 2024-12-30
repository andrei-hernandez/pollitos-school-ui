import { Component } from '@angular/core'
import {NavBarComponent} from "../../../../layout/nav-bar/nav-bar.component"
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-gerardoinstitute',
  imports: [
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './gerardoinstitute.component.html',
  styleUrl: './gerardoinstitute.component.css'
})
export class GerardoinstituteComponent {

}
