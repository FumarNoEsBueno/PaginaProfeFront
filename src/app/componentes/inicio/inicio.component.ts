import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {


  testData: any = {
    imageUrl : "https://mcdn.wallpapersafari.com/medium/37/14/SDPUf2.jpg",
    titulo : "Titulo de testeo",
    descripcion : "Wena los k, en que andamos"
  }

}
