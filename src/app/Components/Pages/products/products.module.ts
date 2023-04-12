import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from '../../Partials/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRangeModule } from '@taiga-ui/kit';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRangeModule,
    NgxSkeletonLoaderModule,
    RouterModule
  ]
})
export class ProductsModule { }
