import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
