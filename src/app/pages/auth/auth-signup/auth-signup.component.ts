import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [],
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.scss'
})

export class AuthSignupComponent implements
  OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }

}
