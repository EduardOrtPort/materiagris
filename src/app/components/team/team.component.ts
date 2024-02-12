import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamData =[
    {
      image:'assets/images/client/04.jpg',
      name:'Jack John',
      title:'Designer'
    },
    {
      image:'assets/images/client/05.jpg',
      name:'Krista John',
      title:'Designer'
    },
    {
      image:'assets/images/client/06.jpg',
      name:'Roger Jackson',
      title:'Designer'
    },
    {
      image:'assets/images/client/07.jpg',
      name:'Johnny English',
      title:'Designer'
    },
  ]
}
