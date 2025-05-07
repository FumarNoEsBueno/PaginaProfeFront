import { Component, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BlogComponent } from '../blog/blog.component';
import { InicioComponent } from '../inicio/inicio.component';
import { PortafolioComponent } from '../portafolio/portafolio.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  logoUrl: String = "https://pm1.aminoapps.com/7200/25442efa3ee1907ad1eda0882b30f4bce10267c7r1-1147-928v2_00.jpg";
  nombrePagina: String = "Pagina de testeo V0.1";
  items: any[] = [];
  isNavbarVisible = true;
  lastScrollTop = 0;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: 'inicio'
      },
      {
        label: 'Blog',
        icon: 'pi pi-info-circle',
        routerLink: 'blog'
      },
      {
        label: 'Portafolio',
        icon: 'pi pi-info-circle',
        routerLink: 'portafolio'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: 'contacto'
      }
    ];
  }

}
