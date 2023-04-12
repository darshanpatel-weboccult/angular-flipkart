import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { BreadcrumbsModule } from 'src/app/Components/Partials/breadcrumbs/breadcrumbs.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
