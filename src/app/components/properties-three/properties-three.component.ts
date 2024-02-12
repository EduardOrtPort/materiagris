import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import PropertyData from '../../data/property.json'
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
  selector: 'app-properties-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-three.component.html',
  styleUrl: './properties-three.component.scss'
})
export class PropertiesThreeComponent {

  propertylist:Property[] = PropertyData.slice(0,6)
}
