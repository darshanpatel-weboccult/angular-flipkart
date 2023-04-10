import { Component, OnInit } from "@angular/core";
import {
  faCaretRight,
  faChevronRight,
  faMagnifyingGlass,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
  xMark = faXmark;
  star = faStar;
  search = faMagnifyingGlass;
  selectedCategory: number | null = null;
  sliderVal: number[] = [0, 1000];
  sortby: string = "popularity";

  constructor(private dataProvider: DataProviderService) {}

  async ngOnInit(): Promise<void> {
    this.productCategoryData = await this.dataProvider.getProductDropdownData();
    console.log(this.productCategoryData);
  }

  test = [this.getUrl(), this.getUrl(),this.getUrl(),this.getUrl()]
  getUrl():string{
    let url = 'https://placehold.co/';
    let width = Math.ceil(Math.random() * 10)*100;
    let height = (Math.floor(Math.random()*4)*100)+width;
    url += `${width}x${height}`
    console.log(url);
    return url;
  }
}
