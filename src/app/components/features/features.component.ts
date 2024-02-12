import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  featureData = [
    {
      icon:'uil uil-estate',
      title:'Evaluate Property',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'uil uil-bag',
      title:'Meeting with Agent',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'uil uil-key-skeleton',
      title:'Close the Deal',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
  ]

}
