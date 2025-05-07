import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { MostradorVerticalComponent } from './componentes/mostrador-vertical/mostrador-vertical.component';
import { MostradorCuadriculadoComponent } from './componentes/mostrador-cuadriculado/mostrador-cuadriculado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent,
    FooterComponent,
    BlogComponent,
    MostradorVerticalComponent,
    MostradorCuadriculadoComponent,
    InicioComponent,
    PortafolioComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaginaProfeFront';
}
