import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from '../../Partials/breadcrumbs/breadcrumbs.module';
import { TuiRangeModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';



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
    TuiRangeModule,
    NgxSkeletonLoaderModule,
    RouterModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
