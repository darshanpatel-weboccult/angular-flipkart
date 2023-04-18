import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  category:"flipkart" | "grocery" = "flipkart";
  user:any = null;
  cart:any[] = [];

  constructor(private router:Router){}

  navigate(...path:string[]){
    this.router.navigate(path);
  }
}
