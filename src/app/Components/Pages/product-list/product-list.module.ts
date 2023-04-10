import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from '../../Partials/breadcrumbs/breadcrumbs.module';
import { TuiRangeModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRangeModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
