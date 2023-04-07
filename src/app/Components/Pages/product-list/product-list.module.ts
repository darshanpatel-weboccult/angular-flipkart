import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from '../../Partials/breadcrumbs/breadcrumbs.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BreadcrumbsModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
