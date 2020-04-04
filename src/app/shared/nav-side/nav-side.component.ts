import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css']
})
export class NavSideComponent implements OnInit {

  isOpen = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  public logout() {
    this.authService.logout();
  }

}
