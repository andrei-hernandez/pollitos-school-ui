import { Component } from '@angular/core'
import {NavigationEnd, Router, RouterOutlet} from '@angular/router'
import {DefaultHeaderComponent} from './layout/headers/default-header/default-header.component'
import {FooterComponent} from './layout/footer/footer.component';
import {ZetcollegeHeaderComponent} from './layout/headers/zetcollege-header/zetcollege-header.component';
import {
  GerardoinstituteHeaderComponent
} from './layout/headers/gerardoinstitute-header/gerardoinstitute-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DefaultHeaderComponent, FooterComponent, ZetcollegeHeaderComponent, GerardoinstituteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pollitos-school-ui'

  headerType: string = 'default'

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Configurar header según la ruta activa
        if (event.url === '/school1') {
          this.headerType = 'school1'
        } else if (event.url === '/school2') {
          this.headerType = 'school2'
        } else {
          this.headerType = 'default'
        }
      }
    });
  }

}
