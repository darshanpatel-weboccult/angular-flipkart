import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './Components/Partials/navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from './Components/Partials/footer/footer.module';
import { LoginModule } from './Components/Pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NavbarModule,
    FooterModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
