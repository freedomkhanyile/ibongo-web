import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav';

 
// const routes: Routes = [
//   { path: '', loadChildren:  './index/index.module#IndexModule' }
// ];

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }
];

export const declarations = [NavComponent,HomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutes { }
