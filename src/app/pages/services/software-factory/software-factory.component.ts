import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-software-factory',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './software-factory.component.html',
  styleUrl: './software-factory.component.scss'
})
export class SoftwareFactoryComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-eficiencia.png',
        title:'Eficiencia en el Desarrollo',
        desc:'Las fábricas de software están equipadas con equipos de desarrolladores especializados y procesos optimizados. Esto conduce a una mayor eficiencia en el desarrollo de software, permitiendo la entrega oportuna de proyectos.'
      },
      {
        icon:'assets/img/services/icon-costos.png',
        title:'Reducción de Costos',
        desc:'Al contar con un equipo especializado y procesos estandarizados, las fábricas de software pueden lograr una mayor eficiencia operativa y, por ende, reducir los costos asociados al desarrollo de software en comparación con soluciones ad hoc.'
      },
      {
        icon:'assets/img/services/icon-consistencia.png',
        title:'Calidad y consistencia',
        desc:'Las fábricas de software suelen aplicar estándares de calidad rigurosos y procesos coherentes en todos sus proyectos. Esto resulta en productos de software de alta calidad y en una mayor consistencia en la entrega de soluciones.'
      },
    ]
}
