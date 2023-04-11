import { Component, HostListener, OnInit } from "@angular/core";
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
import { Product, ProductService } from "src/app/Shared/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  productCategoryData: ProductCategory[] = [];
  products: Product[] = [];
  chevronRight = faChevronRight;
  caretRight = faCaretRight;
  xMark = faXmark;
  star = faStar;
  search = faMagnifyingGlass;
  selectedCategory: number | null = null;
  sliderVal: number[] = [0, 1000];
  sortby: string = "popularity";
  showBackToTop: boolean = false;

  constructor(
    private dataProvider: DataProviderService,
    private productService: ProductService
  ) {}

  async ngOnInit(): Promise<void> {
    this.productCategoryData = await this.dataProvider.getProductDropdownData();
    let allProducts = await this.productService.getAllProducts();

    let updatedProducts: Product[] = [];
    while (updatedProducts.length < 40) {
      updatedProducts.push(
        allProducts[Math.floor(Math.random() * allProducts.length)]
      );
    }
    this.products = updatedProducts;
  }

  @HostListener("window:scroll")
  checkScroll() {
    this.showBackToTop =
      document.documentElement.scrollTop >= window.innerHeight * 2;
  }
  goToTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
}
