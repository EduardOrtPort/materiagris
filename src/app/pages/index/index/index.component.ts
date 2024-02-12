import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../../components/about/about.component';
import { FeaturesComponent } from '../../../components/features/features.component';
import { PropertiesComponent } from '../../../components/properties/properties.component';
import { ClientsComponent } from '../../../components/clients/clients.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../components/switcher/switcher.component';
import { GetInTouchComponent } from '../../../components/get-in-tuch/get-in-touch.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent, NgSelectModule, FormsModule, YouTubePlayerModule,CommonModule, AboutComponent, FeaturesComponent,PropertiesComponent,ClientsComponent, GetInTouchComponent,FooterComponent,SwitcherComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  slides = [
    {
      id: 1,
      background: "assets/img/index/slide-1.jpg",
      title: "EXPERTOS EN CONSULTORÍA TI",
      btnUrl: "",
      bntText: "Conoce más",
    },
    {
      id: 2,
      background: "assets/img/index/slide-2.jpg",
      title: "OBTÉN EL MEJOR TALENTO CON NUESTRO SERVICIO DE OUTSOURCING",
      btnUrl: "",
      bntText: "contáctanos",
    },
    {
      id: 3,
      background: "assets/img/index/slide-3.jpg",
      title: "PROYECTOS DE DESARROLLO WEB Y MÓVIL PARA TU EMPRESA",
      btnUrl: "",
      bntText: "Ir a Servicios",
    },
    {
      id: 4,
      background: "assets/img/index/slide-4.jpg",
      title: "SOLUCIONES DIGITALES ADAPTABLES A LAS NECESIDADES DE TU NEGOCIO",
      btnUrl: "",
      bntText: "Conoce más",
    },
  ]

  currentSlide = 1;

  ngOnInit() {}

  prevImage() {
    this.currentSlide = this.currentSlide - 1;
  }

  nextImage() {
    this.currentSlide = this.currentSlide + 1;
  }
  
}
