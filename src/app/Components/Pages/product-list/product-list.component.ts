import { Component, OnInit } from "@angular/core";
import { faCaretRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  DataProviderService,
  ProductCategory,
} from "src/app/Shared/data-provider.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  productCategoryData: ProductCategory[] = [];
  chevronRight = faChevronRight;
  caretRight = faCaretRight;
  selectedCategory:number | null = null;

  constructor(private dataProvider: DataProviderService) {}

  async ngOnInit(): Promise<void> {
    this.productCategoryData = await this.dataProvider.getProductDropdownData();
    console.log(this.productCategoryData);
    
  }
}
