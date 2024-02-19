import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-ti-support',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './ti-support.component.html',
  styleUrl: './ti-support.component.scss'
})
export class TISupportComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-altamente.png',
        title:'Personal Altamente Capacitado a tu Servicio',
        desc:'Contamos con un equipo de profesionales capacitados que se dedican a cubrir tus necesidades TI. Desde problemas cotidianos hasta proyectos especializados, nuestro personal está listo para brindar soluciones rápidas y efectivas, permitiéndote mantener un enfoque ininterrumpido en tu negocio.'
      },
      {
        icon:'assets/img/services/icon-productividad.png',
        title:'Reducción de Costos y Aumento de Productividad:',
        desc:'La experiencia, conocimiento y compromiso de nuestro equipo no solo garantizan un soporte eficiente, sino que también contribuyen a la reducción de costos operativos. Trabajamos codo a codo contigo para mantener y mejorar la productividad de tus servicios, asegurando que cada inversión en tecnología se traduzca en un retorno significativo para tu negocio.'
      }
    ]
}
