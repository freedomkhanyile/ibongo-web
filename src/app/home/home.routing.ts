import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
 
 

 
// const routes: Routes = [
//   { path: '', loadChildren:  './index/index.module#IndexModule' }
// ];

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }
];

export const declarations = [HomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutes { }
