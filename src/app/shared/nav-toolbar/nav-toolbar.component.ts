import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent implements OnInit {
  //Crea Eventos palanca del componente Nav-toolbar
  @Output() toggleSideNav = new EventEmitter();
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onToggleSideNav() {
    this.toggleSideNav.emit();  //Emite un valor ON u OFF del evento
  }

  public onLogout(){
    this.logout.emit();
  }

}
