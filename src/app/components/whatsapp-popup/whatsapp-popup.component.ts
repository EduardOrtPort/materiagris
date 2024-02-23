import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whatsapp-popup',
  standalone: true,
  imports: [ CommonModule, FormsModule  ],
  templateUrl: './whatsapp-popup.component.html',
  styleUrl: './whatsapp-popup.component.scss'
})
export class WhatsappPopupComponent implements OnInit {

  open: boolean = false;
  message: string = "";

  ngOnInit(): void {
    
  }

  sendMessage(){
    if(this.message){
      let numero = '51954898728'; 
      let url = `whatsapp://send?phone=${numero}&text=${encodeURIComponent(this.message)}`;
      window.open(url, '_blank');
      this.message = "";
    }
  }
  
}
