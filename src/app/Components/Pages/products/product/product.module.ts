import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { BreadcrumbsModule } from "src/app/Components/Partials/breadcrumbs/breadcrumbs.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      outerStrokeWidth: 5,
      showInnerStroke: true,
      space: -5,
      radius:28,
      showBackground: false,
      showUnits: false,
      animation:false,
      titleColor:'#212121',
      titleFontSize:'16px',
      titleFontWeight: '500',
      innerStrokeWidth: 5,
      showSubtitle: false,
      innerStrokeColor: "#f0f0f0",
      animationDuration:0
    }),
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
