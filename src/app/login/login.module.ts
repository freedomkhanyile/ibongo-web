import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule, declarations } from './login-routing.module';
 

@NgModule({
    imports: [CommonModule, LoginRoutingModule],
    declarations: [...declarations]
})
export class LoginModule {}
