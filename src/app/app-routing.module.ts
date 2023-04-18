import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/Pages/login/login.component";
import { HomeComponent } from "./Components/Pages/home/home.component";
import { CartComponent } from "./Components/Pages/cart/cart.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("src/app/Components/Pages/products/products.module").then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
