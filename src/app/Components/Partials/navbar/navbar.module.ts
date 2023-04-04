import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '../../Pages/login/login.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LoginModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
