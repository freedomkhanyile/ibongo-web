import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IndexRoutes, declarations } from './index.routing'; 
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule, IndexRoutes, 
    MDBBootstrapModule.forRoot()
  ],
  declarations: [...declarations]
})
export class IndexModule { }
