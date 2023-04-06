import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  category: string;
  image: string;
  slug: string;
  rating: number;
  ratingCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  productsURL: string = 'assets/JSON/products.json';

  constructor(private http: HttpClient) {}

  async getAllProducts(): Promise<Product[]> {
    this.products = await new Promise((resolve, reject) => {
      this.http.get(this.productsURL).subscribe((data) => {
        // setTimeout(() => {
        //   resolve(data as Product[]);
        // }, 3000);
        resolve(data as Product[]);
      });
    });
    return this.products;
  }
  async getProductsByCategory(
    category: 'electronics' | 'beauty'
  ): Promise<Product[]> {
    this.products = await new Promise((resolve, reject) => {
      this.http.get(this.productsURL).subscribe((data) => {
        setTimeout(() => {
          resolve(data as Product[]);
        }, 3000);
      });
    });
    return this.products.filter(
      (product: Product) => product.category === category
    );
  }
}
