import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})

export class AuthLoginComponent implements
  OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }

}