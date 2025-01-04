/* eslint-disable */
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router'
import {DefaultHeaderComponent} from './layout/headers/default-header/default-header.component'
import {FooterComponent} from './layout/footer/footer.component'
import {SchoolHeaderComponent} from './layout/headers/school-header/school-header.component'
import {filter} from 'rxjs'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DefaultHeaderComponent, FooterComponent, SchoolHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  headerType: string = 'default' // Valor inicial del headerType
  title: string = 'pollitos-school-ui';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Escucha cambios en la navegación para actualizar el headerType
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setHeaderType()
      })
  }

  setHeaderType(): void {
    // Obtiene la ruta activa y actualiza el headerType
    const currentUrl = this.router.url.toLowerCase();

    // Verifica si contiene palabras clave
    if (currentUrl.includes('gerardoinstitute')) {
      this.headerType = 'gerardoinstitute';
    } else if (currentUrl.includes('zetcollege')) {
      this.headerType = 'zetcollege';
    } else {
      this.headerType = 'default';
    }
  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    // Recorre las rutas anidadas para encontrar la activa
    while (route.firstChild) {
      route = route.firstChild
    }
    return route
  }
}
