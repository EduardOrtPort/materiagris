import { CommonModule } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../../components/footer/footer.component';

import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';


@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, LightgalleryModule],
  templateUrl: './property-detail.component.html',
  styleUrl: '../../../../../../node_modules/lightgallery/scss/lightgallery.scss'
})
export class PropertyDetailComponent implements OnInit{
  ngOnInit() {
  }
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  
}
