import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  @Input() childMessage?: string;

  constructor() { }
  
}
