import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  nombreEmpresa: String = "Bio bio reciclajes spa";
  icono: String = "https://pm1.aminoapps.com/7200/25442efa3ee1907ad1eda0882b30f4bce10267c7r1-1147-928v2_00.jpg";
  contacto: String = "@2025 BioBio Reciclajes Spa - Todos los derechos reservados";
  descripcion: String = "@2025 BioBio Reciclajes Spa - Todos los derechos reservados";

}
