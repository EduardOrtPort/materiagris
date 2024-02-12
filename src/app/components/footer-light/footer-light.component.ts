import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-light',
  standalone: true,
  imports: [],
  templateUrl: './footer-light.component.html',
  styleUrl: './footer-light.component.scss'
})
export class FooterLightComponent {
  date:number = new Date().getFullYear()
}
