import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, Router } from '@angular/router';
import * as feather from 'feather-icons';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements
  OnInit, AfterViewInit {
    
  constructor(
    private router : Router,
    private _dialog: MatDialog,
    ) { }

  ngOnInit(): void {
      console.log(this.router.url);
      window.scrollTo(0, 0);
  }
  ngAfterViewInit() {
    feather.replace();
    this.activateMenu();
  }

  status: boolean = false;
  toggleMenu(){
      this.status = !this.status;       
  }
  manu:boolean = true
  manuOpen:string=''
  subManu(item:any){
    this.manu = !this.manu;  
    this.manuOpen = item
    console.log(this.manuOpen);
  }

  windowScroll() {
    const navbar = document.getElementById('topnav') as HTMLInputElement;
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }

    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.classList.add("block");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("block");
      }
    }

  }

  activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item") as any;
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = this.getClosest(matchingMenuItem, 'li');

        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = this.getClosest(immediateParent, '.child-menu-item');
        if (parent) {
          parent.classList.add('active');
        }
        console.log('Netlink =>', parent);
        var parent = this.getClosest(parent || immediateParent, '.parent-menu-item');

        if (parent) {
          parent.classList.add('active');

          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }

          var parentOfParent = this.getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = this.getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }
  getClosest(elem: any, selector: any) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };
  console = console;
  
 @Input() childMessage? : string
 @Input() navLight? : boolean

 navLight2? : boolean = false

 openContact() {
  // let dialogRef = this._dialog.open(ContactModalComponent);

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`);
  // });
}

 

}