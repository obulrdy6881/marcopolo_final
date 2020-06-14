import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ActiveNavLink: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentChecked(){
  this.ActiveNavLink= window.location.pathname;
}
}
