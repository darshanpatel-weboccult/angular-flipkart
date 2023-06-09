import { TuiRootModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxSlickModule } from "ngx-simple-slick";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "./Components/Partials/navbar/navbar.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterModule } from "./Components/Partials/footer/footer.module";
import { LoginModule } from "./Components/Pages/login/login.module";
import { HomeModule } from "./Components/Pages/home/home.module";
import { NgImageSliderModule } from "ng-image-slider";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./Shared/product.service";
import { ProductsModule } from "./Components/Pages/products/products.module";
import { ProductListModule } from "./Components/Pages/products/product-list/product-list.module";
import { ProductModule } from "./Components/Pages/products/product/product.module";
import { CartModule } from "./Components/Pages/cart/cart.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NavbarModule,
    FooterModule,
    LoginModule,
    HomeModule,
    NgImageSliderModule,
    NgxSlickModule,
    HttpClientModule,
    ProductsModule,
    ProductListModule,
    ProductModule,
    BrowserAnimationsModule,
    TuiRootModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
