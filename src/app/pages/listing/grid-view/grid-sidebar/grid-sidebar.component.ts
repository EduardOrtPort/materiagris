import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import PropertyData from '../../../../data/property.json'

interface Property {
  id:number
  image:string
  name:string
  sqf:string
  beds:string
  baths:string
  price:string
}

@Component({
  selector: 'app-grid-sidebar',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './grid-sidebar.component.html',
  styleUrl: './grid-sidebar.component.scss'
})
export class GridSidebarComponent {
  propertylist:Property[] = PropertyData
}
