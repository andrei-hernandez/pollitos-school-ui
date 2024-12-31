import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from "@angular/router"
import {NgClass, NgIf} from "@angular/common"

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    RouterOutlet
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  expanded: boolean = true

  toggleSidebar() {
    this.expanded = !this.expanded
  }

}
