import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IndexRoutes, declarations } from './index.routing';

@NgModule({
  imports: [
    CommonModule, IndexRoutes
  ],
  declarations: [...declarations]
})
export class IndexModule { }
