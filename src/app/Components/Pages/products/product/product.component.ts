import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product, ProductService } from "src/app/Shared/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("250ms 1s", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("250ms 1s", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProductComponent implements OnInit {
  productId!: number;
  product!: Product;
  showcaseImageIds: number[] = [];
  currentShowcaseId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      if (!params["id"]) return;
      if (isNaN(params["id"])) {
        this.router.navigate(["../"], { relativeTo: this.route });
      }
      this.productId = this.currentShowcaseId = Number(params["id"]);
      this.showcaseImageIds = new Array(6)
        .fill(0)
        .map((item, index) => (this.productId + index) % 16);
    });
    let product = await this.productService.getProductById(this.productId);
    if (!product) {
      this.router.navigate(["../"], { relativeTo: this.route });
      return;
    }
    this.product = product;
    document.title = product.title;
  }
}
