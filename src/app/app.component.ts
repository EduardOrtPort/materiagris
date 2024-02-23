import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { WhatsappPopupComponent } from './components/whatsapp-popup/whatsapp-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,MatDialogModule,SwitcherComponent, WhatsappPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements
  OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
