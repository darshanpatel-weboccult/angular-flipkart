import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSlickModule } from 'ngx-simple-slick';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './Components/Partials/navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from './Components/Partials/footer/footer.module';
import { LoginModule } from './Components/Pages/login/login.module';
import { HomeModule } from './Components/Pages/home/home.module';
import { NgImageSliderModule } from 'ng-image-slider';

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
    LoginModule,
    HomeModule,
    NgImageSliderModule,
    NgxSlickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
