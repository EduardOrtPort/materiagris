import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

  propertylist:Property[] = PropertyData.slice(0,6)

  @Input() moreOption? :boolean

}
