import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';


interface Property {
  id:number
  image:string
  name:string
  company:string
  desc:string
}

@Component({
  selector: 'app-clients-say',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './clients-say.component.html',
  styleUrl: './clients-say.component.scss'
})
export class ClientsSayComponent implements AfterViewInit {

  slider: any;
  clientlist:Property[] =[
    {
        "id":1,
        "image":"assets/images/property/1.jpg",
        "name":"Larry Davis",
        "company":"Chubb",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
      {
        "id":2,
        "image":"assets/images/property/2.jpg",
        "name":"Lana del Rey",
        "company":"Protecta Security",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
      {
        "id":3,
        "image":"assets/images/property/3.jpg",
        "name":"Harry Syles",
        "company":"La Positiva Seguros",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
      {
        "id":4,
        "image":"assets/images/property/4.jpg",
        "name":"Larry Davis",
        "company":"Chubb",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
      {
        "id":5,
        "image":"assets/images/property/5.jpg",
        "name":"Larry Davis",
        "company":"Chubb",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
      {
        "id":6,
        "image":"assets/images/property/6.jpg",
        "name":"Larry Davis",
        "company":"Chubb",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum orci mi, nec ornare orci iaculis eu. Donec eget felis velit. In hac habitasse platea dictumst. Praesent vitae lorem ac nulla consectetur pulvinar accumsan ut lorem.",
      },
]

  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-home-slide-three');
    if (sliderContainer) {
      this.slider = tns({
        container: '.tiny-home-slide-three',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        //nav: false,
        navAsThumbnails: true ,
        speed: 400,
        gutter: 0,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      });
    }
  }
}
