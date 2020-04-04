import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSideComponent } from './nav-side/nav-side.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { MatExpansionModule } from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavSideComponent, NavToolbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    NavSideComponent, NavToolbarComponent, NotFoundComponent
  ]
})
export class SharedModule { }
