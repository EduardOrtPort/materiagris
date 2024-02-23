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
import { tns } from 'tiny-slider';
import { ClientsSayComponent } from '../../../components/client-say/clients-say.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NavbarComponent, 
    NgSelectModule, 
    FormsModule, 
    YouTubePlayerModule,
    CommonModule, 
    AboutComponent, 
    FeaturesComponent,
    PropertiesComponent,
    ClientsComponent, 
    GetInTouchComponent,
    FooterComponent,
    SwitcherComponent,
    ClientsSayComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
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
    if (this.currentSlide === 1) {
      this.currentSlide = this.slides.length;
    } else {
      this.currentSlide = this.currentSlide - 1;
    }
  }

  nextImage() {
    if (this.currentSlide === this.slides.length) {
      this.currentSlide = 1;
    } else {
      this.currentSlide = this.currentSlide + 1;
    }
  }

  slider: any;

  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-single-item');
    if (sliderContainer) {
      this.slider = tns({
        container: '.tiny-single-item',
        items: 3,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition:  "bottom",
        speed: 400,
        gutter: 16,
      });
    }
  }
    clientData = [
      {
        image:'assets/images/client/01.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. "'
      },
      {
        image:'assets/images/client/02.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" I highly recommend Hously as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "'
      },
      {
        image:'assets/images/client/03.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!  "'
      },
      {
        image:'assets/images/client/04.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" Great experience all around! Easy to use and efficient. "'
      },
      {
        image:'assets/images/client/05.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" Hously made selling my home easy and stress free. They went above and beyond what is expected. "'
      },
      {
        image:'assets/images/client/06.jpg',
        name:'Christa Smith',
        title:'Manager',
        desc:'" Hously is fair priced, quick to respond, and easy to use. I highly recommend their services! "'
      },
    ]
  
}
