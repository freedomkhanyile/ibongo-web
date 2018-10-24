import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { HomeRoutes, declarations } from './home.routing';

@NgModule({
  imports: [
    CommonModule, 
    HomeRoutes
  ],
  declarations: [ ...declarations ]
})
export class HomeModule { }
