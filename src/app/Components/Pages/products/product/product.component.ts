import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  productId!: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params["id"]) return;
      if (isNaN(params["id"])) {
        console.log('ji');
        
        this.router.navigate(["../"], { relativeTo: this.route });
      }
      this.productId = Number(params["id"]);
    });
  }
}
