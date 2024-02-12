import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-auth-re-password',
  standalone: true,
  imports: [],
  templateUrl: './auth-re-password.component.html',
  styleUrl: './auth-re-password.component.scss'
})
export class AuthRePasswordComponent implements
  OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }

}