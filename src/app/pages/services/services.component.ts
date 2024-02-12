import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { GetInTouchComponent } from '../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
    servicesData = [
      {
        icon:'assets/img/services/icon-fabrica.png',
        title:'Fábrica de Software',
        desc:'Servicio empresarial que permite automatizar el desarrollo y el mantenimiento de soluciones aumentando la eficiencia del negocio.'
      },
      {
        icon:'assets/img/services/icon-calidad.png',
        title:'Calidad de Software',
        desc:'Servicio que permite mejorar la calidad de los productos de Software y su mejora continua.'
      },
      {
        icon:'assets/img/services/icon-consultoria.png',
        title:'Consultoría y Servicios profesionales',
        desc:'Consultoría especializada en Seguros, Telecomunicaciones, entre otros.'
      },
      {
        icon:'assets/img/services/icon-app.png',
        title:'APPS',
        desc:'Implementamos aplicaciones móviles, funcionales y visualmente atractivas, a partir de las necesidades del cliente, startups o emprendimientos.'
      },
      {
        icon:'assets/img/services/icon-app.png',
        title:'Desarrollo',
        desc:'Desarrollo de Proyectos Digitales, Software a Medida y Aplicaciones.'
      },
      {
        icon:'assets/img/services/icon-soporte.png',
        title:'Soporte TI',
        desc:'Contamos con servicios de Soporte de aplicaciones y Soporte de infraestructura.'
      },
    ]
}
