import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-consultancy-services',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './consultancy-services.component.html',
  styleUrl: './consultancy-services.component.scss'
})
export class ConsultancyandServiceComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-profesionales.png',
        title:'Profesionales Especializados a tu Alcance',
        desc:'Contamos con un equipo de profesionales altamente capacitados y con una amplia experiencia en gestión, análisis, desarrollo y otras funciones especializadas. Sea cual sea tu necesidad temporal de personal, nos aseguramos de proporcionar la combinación perfecta de habilidades y conocimientos para impulsar el éxito de tu proyecto.'
      },
      {
        icon:'assets/img/services/icon-adptabilidad.png',
        title:'Adaptabilidad a Requerimientos Específicos',
        desc:'Entendemos que cada empresa es única, y es por eso que destacamos personal según los requerimientos específicos de tu oficina. Ya sea que necesites Jefes de Proyecto, Analistas de Sistemas, Desarrolladores de Software, Soporte Técnico u otros perfiles especializados, nos aseguramos de proporcionar el talento adecuado para fortalecer tu equipo.'
      },
    ]
}
