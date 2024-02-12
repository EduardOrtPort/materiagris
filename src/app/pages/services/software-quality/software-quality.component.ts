import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-software-quality',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ClientsComponent, GetInTouchComponent, FooterComponent, RouterLink],
  templateUrl: './software-quality.component.html',
  styleUrl: './software-quality.component.scss'
})
export class SoftwareQualityComponent {
    softwareFactoryData = [
      {
        icon:'assets/img/services/icon-especialistas.png',
        title:'Especialistas en Aseguramiento de Calidad',
        desc:'Nuestro equipo está compuesto por especialistas con una vasta experiencia en aseguramiento de calidad. Trabajamos de la mano con tu empresa para implementar prácticas rigurosas que garanticen la excelencia en cada fase del desarrollo de software, desde la planificación hasta la implementación y más allá.'
      },
      {
        icon:'assets/img/services/icon-estandares.png',
        title:'Adherencia a Estándares Industriales',
        desc:'Nos comprometemos a seguir los más estrictos estándares de la industria en cada proyecto. Esta dedicación asegura que tu software cumpla con normativas reconocidas y responda a las mejores prácticas de la industria, proporcionando productos de alta calidad y confianza.'
      },
      {
        icon:'assets/img/services/icon-automatizacion.png',
        title:'Herramientas de Automatización Avanzadas',
        desc:'Como socios de STELA, contamos con acceso a herramientas de automatización de pruebas de calidad de software de vanguardia. Estas herramientas no solo mejoran la eficiencia de nuestros procesos, sino que también garantizan la detección temprana de posibles problemas, permitiendo ajustes proactivos y asegurando un software sólido y confiable.'
      },
    ]
}
