import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { NavbarFullComponent } from '../../../../components/navbar-full/navbar-full.component';

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
  selector: 'app-list-map',
  standalone: true,
  imports: [NgSelectModule, CommonModule, NavbarFullComponent],
  templateUrl: './list-map.component.html',
  styleUrl: './list-map.component.scss'
})
export class ListMapComponent {
  property = [
    { id: 1, name: 'Houses' },
    { id: 2, name: 'Apartment' },
    { id: 3, name: 'Offices' },
    { id: 4, name: 'Townhome' },
  ]

  minPrice = [
    {id: 1, name: '500'},
    {id: 2, name: '1000'},
    {id: 3, name: '2000'},
    {id: 4, name: '3000'},
    {id: 5, name: '4000'}
  ]

  maxPrice = [
    {id: 1, name: '500'},
    {id: 2, name: '1000'},
    {id: 3, name: '2000'},
    {id: 4, name: '3000'},
    {id: 5, name: '4000'}
  ]

  propertylist:Property[] = PropertyData
}
