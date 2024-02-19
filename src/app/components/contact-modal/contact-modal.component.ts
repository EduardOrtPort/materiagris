import { Component, Input } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [MatDialogModule ],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  @Input() childMessage?: string;

  constructor(public dialogRef: MatDialogRef<ContactModalComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}
