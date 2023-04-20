import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product, ProductService } from "src/app/Shared/product.service";

interface CartItem extends Product {
  count: number;
}

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  category: "flipkart" | "grocery" = "flipkart";
  showOverlay: boolean = false;
  deleteId: number | null = null;
  cart!: CartItem[];
  totalAmount: number = 0;
  totalDiscount: number = 0;
  totalPrice: number = 0;

  constructor(private router: Router, private productService: ProductService) {}

  navigate(...path: string[]) {
    this.router.navigate(path);
  }

  async ngOnInit(): Promise<void> {
    let cartItems = JSON.parse(localStorage.getItem("cart") ?? "[]");
    await this.productService
      .getProductsById(
        cartItems.map((item: { id: number; count: number }) => item.id)
      )
      .then((products: Product[]) => {
        this.cart = products.map((product: Product) => ({
          ...product,
          count:
            cartItems.find(
              (item: { count: number; id: number }) => item.id === product.id
            )?.count ?? 1,
        }));
        this.updateTotals();
      });
  }

  updateTotals(): void {
    let amount = 0;
    let discount = 0;
    this.cart.forEach((item: CartItem) => {
      amount += item.price * item.count;
      discount += Math.round((item.price * item.discount) / 100) * item.count;
    });
    this.totalAmount = amount;
    this.totalDiscount = discount;
    this.totalPrice = amount + discount;
  }

  initiateRemove(id:number):void{
    this.deleteId = id;
    this.showOverlay = true;
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  deleteItem(): void {
    this.cart = this.cart.filter((item: CartItem) => item.id !== this.deleteId);
    this.updateTotals();
    localStorage.setItem(
      "cart",
      JSON.stringify(
        this.cart.map((item: CartItem) => ({ id: item.id, count: item.count }))
      )
    );
    this.deleteId = null;
    this.showOverlay = false;
    document.getElementsByTagName('body')[0].style.overflow = 'auto';

  }
  cancelDelete():void{
    this.showOverlay = false;
    this.deleteId = null;
    document.getElementsByTagName('body')[0].style.overflow = 'auto';

  }

  updateCount(index: number, action: "increment" | "decrement"): void {
    if (action === "increment") {
      this.cart[index].count += 1;
      localStorage.setItem(
        "cart",
        JSON.stringify(
          this.cart.map((item: CartItem) => ({
            id: item.id,
            count: item.count,
          }))
        )
      );
      this.updateTotals();
      return;
    }
    this.cart[index].count -= 1;
    localStorage.setItem(
      "cart",
      JSON.stringify(
        this.cart.map((item: CartItem) => ({ id: item.id, count: item.count }))
      )
    );
    this.updateTotals();
  }
}
