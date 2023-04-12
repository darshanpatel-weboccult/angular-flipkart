import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  discount: number;
  category: string;
  image: string;
  slug: string;
  rating: number;
  ratingCount: number;
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [];
  productsURL: string = "assets/JSON/products.json";

  constructor(private http: HttpClient) {}

  async getAllProducts(): Promise<Product[]> {
    this.products = await new Promise((resolve, reject) => {
      this.http.get<Product[]>(this.productsURL).subscribe((data) => {
        resolve(data);
        // setTimeout(() => {
        //   resolve(data as Product[]);
        // }, 3000);
      });
    });
    return this.products;
  }

  async getProductById(productId: number): Promise<Product | undefined> {
    return await new Promise((resolve, reject) => {
      this.http.get<Product[]>(this.productsURL).subscribe((data) => {
        const product = data.find((product) => product.id === productId);
        resolve(product);
      });
    });
  }
}
