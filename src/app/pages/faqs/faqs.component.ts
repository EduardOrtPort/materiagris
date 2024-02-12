import { CommonModule } from '@angular/common';
import {  Component, } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
    faqData = [
      {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
      },
      {
        id:2,
        title:'Do I need a designer to use Hously ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
      },
      {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
      },
      {
        id:4,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
      },
    ]

    activeIndex:number = 1
    toggleBox(id:number){
      this.activeIndex = id
    }

    activeIndex2:number = 1
    toggleBox2(id:number){
      this.activeIndex2 = id
    }
    activeIndex3:number = 1
    toggleBox3(id:number){
      this.activeIndex3 = id
    }
    activeIndex4:number = 1
    toggleBox4(id:number){
      this.activeIndex4 = id
    }

}
