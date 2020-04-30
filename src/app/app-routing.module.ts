import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavSideComponent } from './shared/nav-side/nav-side.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    data: { title: 'MenuSidebar - Login' },
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },
  {
    path: 'navside',
    component: NavSideComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then(
            m => m.HomeModule
          )
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //enableTracing: true                     //enableTracing:  ciclo de vida de navegación
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
