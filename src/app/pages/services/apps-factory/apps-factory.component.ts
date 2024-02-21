import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-apps-factory',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './apps-factory.component.html',
  styleUrl: './apps-factory.component.scss'
})
export class AppsFactoryComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-personalizacion.png',
        title:'Personalización para tus Necesidades',
        desc:'Creamos aplicaciones móviles personalizadas que se adaptan perfectamente a las necesidades específicas de tu empresa. Ya sea que busques mejorar la eficiencia interna o brindar una experiencia excepcional a tus clientes, nuestras soluciones están diseñadas para satisfacer tus objetivos comerciales.'
      },
      {
        icon:'assets/img/services/icon-ux.png',
        title:'Enfoque en Experiencia de Usuario',
        desc:'Entendemos que el éxito de una aplicación depende en gran medida de su diseño y usabilidad. Ponemos un énfasis especial en el diseño de interfaces, experiencia de usuario (UI/UX) y productividad. Cada elemento, desde las notificaciones hasta la integración con servicios en la nube, se optimiza para ofrecer una experiencia fluida y atractiva.'
      },
      {
        icon:'assets/img/services/icon-compatibilidad.png',
        title:'Compatibilidad Multiplataforma y Tecnologías Avanzadas',
        desc:'Desarrollamos aplicaciones nativas o híbridas para iOS, Android y Windows, garantizando así una presencia efectiva en todas las plataformas. Nuestra experiencia abarca tecnologías modernas, y nos destacamos en la integración con Google Mobile Services, servicios en la nube como Firebase, Azure y AWS, así como funcionalidades clave como geolocalización, funcionamiento offline y análisis de datos.'
      },
    ]
}
