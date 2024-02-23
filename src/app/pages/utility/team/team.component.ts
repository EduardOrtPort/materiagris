import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgxOrgChartModule } from '@tots/ngx-org-chart';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, NgxOrgChartModule ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamData = [
    {
      icon:'assets/img/team/jefe-proyecto.png',
      title:'Jefe de proyectos',
      desc:'Supervisan y gestionan proyectos desde su inicio hasta la entrega final. Coordinan equipos, asignan tareas, establecen plazos y aseguran que se cumplan los objetivos del proyecto. También se encargan de la comunicación con los clientes y la toma de decisiones estratégicas.'
    },
    {
      icon:'assets/img/team/sistemas.png',
      title:'Analista de Sistemas',
      desc:'Analizan y diseñan sistemas. Estudian las necesidades de la organización y proponen soluciones tecnológicas. Trabajan en la identificación de requisitos, documentación y especificación de sistemas.'
    },
    {
      icon:'assets/img/team/desarrollador.png',
      title:'Desarrolladores',
      desc:'Crean y mantienen aplicaciones informáticas. Se especializan en distintas áreas como desarrollo web, desarrollo de software, aplicaciones móviles, etc.'
    },
    {
      icon:'assets/img/team/uxui.png',
      title:'Analista UI/UX',
      desc:'Se centran en la parte visual y la experiencia del usuario en aplicaciones y sitios web. Se ocupan de la apariencia de la interfaz, y de la experiencia del usuario en general, incluida la usabilidad y la interactividad.'
    },
    {
      icon:'assets/img/team/qa.png',
      title:'Analista QA',
      desc:'Aseguran la calidad de los productos de software. Desarrollan y ejecutan pruebas para identificar defectos en el software antes de su lanzamiento. Trabajan estrechamente con los desarrolladores para corregir problemas y mejorar la calidad del producto.'
    },
    {
      icon:'assets/img/team/mesa-ayuda.png',
      title:'Analista de Mesa de Ayuda',
      desc:'Proporcionan soporte técnico a los usuarios finales. Resuelven problemas, responden preguntas y ofrecen asistencia técnica.'
    },
  ];



  nodes: any = [
    {
      name: 'Director de Proyectos',
      cssClass: 'ngx-org-ceo',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      // title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Lider de Equipo de Desarrollo',
          cssClass: 'ngx-org-ceo',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          //title: 'CEO, Google Cloud',
          childs: [
            {
              name: 'Analista de Sistemas',
              cssClass: 'ngx-org-ceo',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'CEO, Google Cloud',
              childs: [
                {
                  name: 'Analista Programador',
                  cssClass: 'ngx-org-ceo',
                  image: 'https://www.w3schools.com/howto/img_avatar.png',
                  //title: 'CEO, Google Cloud',
                  childs: [
                    {
                      name: 'Programador',
                      cssClass: 'ngx-org-ceo',
                      image: 'https://www.w3schools.com/howto/img_avatar.png',
                      //title: 'CEO, Google Cloud',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Lider de Equipo de Calidad',
          cssClass: 'ngx-org-ceo',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          //title: 'CEO, YouTube',
          childs: [
            {
              name: 'Analista Funcional',
              cssClass: 'ngx-org-head',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Analista de Calidad',
              cssClass: 'ngx-org-vp',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'VP, Agency and Brand Solutions',
              childs: []
            }
          ]
        },
        {
          name: 'Lider de Equipo de Infraestructura y experiencia de Usuario',
          cssClass: 'ngx-org-head',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          //title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'Analista de Soporte e Infraestructura',
              cssClass: 'ngx-org-ceo',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'CEO, Google Health',
              childs: []
            },
            {
              name: 'Analista de Arquitectura de SOftware',
              cssClass: 'ngx-org-head',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Analista UX/UI',
              cssClass: 'ngx-org-vp',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              //title: 'VP, Agency and Brand Solutions',
              childs: [
                {
                  name: 'Diseñador UX/UI',
                  cssClass: 'ngx-org-vp',
                  image: 'https://www.w3schools.com/howto/img_avatar.png',
                  //title: 'VP, Agency and Brand Solutions',
                }
              ]
            }
          ]
        },
        {
          name: 'Lider de Equipo de Soporte',
          cssClass: 'ngx-org-head',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          //title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'Analista de Soporte de Aplicaciones',
              cssClass: 'ngx-org-ceo',
              image: 'https://www.w3schools.com/howto/img_avatar.png',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    }
  ];
}
