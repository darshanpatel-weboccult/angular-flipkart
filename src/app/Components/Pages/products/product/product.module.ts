import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { BreadcrumbsModule } from 'src/app/Components/Partials/breadcrumbs/breadcrumbs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    BrowserAnimationsModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
