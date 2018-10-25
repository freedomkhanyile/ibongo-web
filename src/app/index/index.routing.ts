import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home';
import { IndexComponent } from './index.component';
import { NavComponent } from '../nav';
 


const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }
];
export const declarations =[HomeComponent,IndexComponent,NavComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutes {}
