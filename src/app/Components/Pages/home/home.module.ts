import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSlickModule } from 'ngx-simple-slick';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DropdownModule } from '../../Partials/dropdown/dropdown.module';
import { DropdownDirective } from 'src/app/Shared/dropdown.directive';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NgxSlickModule,
    CommonModule,
    NgImageSliderModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule,
    DropdownModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
