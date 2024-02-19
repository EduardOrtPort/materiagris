import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-apps-develope',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './develope.component.html',
  styleUrl: './develope.component.scss'
})
export class DevelopeComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-medida.png',
        title:'Soluciones a tu medida',
        desc:'Enfrentamos cada proyecto de manera completa, asegurando que cada detalle se alinee con tus objetivos comerciales. Nuestra atención personalizada garantiza soluciones adaptadas a tus necesidades específicas, proporcionando un valor real a tu empresa.'
      },
      {
        icon:'assets/img/services/icon-disposicion.png',
        title:'Equipo de Expertos a tu Disposición',
        desc:'Nuestro equipo está formado por desarrolladores front-end y back-end, arquitectos de software, gerentes de Cloud Computing y otros profesionales especializados en iOS, Android y Windows. Esta diversidad de habilidades nos permite ofrecer una gama completa de servicios, asegurando la ejecución exitosa de cualquier proyecto.'
      },
      {
        icon:'assets/img/services/icon-multiplataforma.png',
        title:'Alcance Multiplataforma para tu Éxito',
        desc:'Entendemos la importancia de llegar a tus clientes donde se encuentren. Con expertos especializados en iOS, Android y Windows, estamos preparados para desarrollar soluciones que abarquen diversas plataformas. Maximiza tu presencia en el mercado y la accesibilidad de tus servicios con nuestras soluciones tecnológicas versátiles.'
      },
    ]
}
