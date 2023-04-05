import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    FontAwesomeModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
