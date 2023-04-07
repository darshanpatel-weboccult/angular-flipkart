import { Component, OnInit } from "@angular/core";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NgImageSliderComponent } from "ng-image-slider";
import { NgxslickComponent } from "ngx-simple-slick";
import { Product, ProductService } from "src/app/Shared/product.service";
import {
  AllData,
  CategoryData,
  DataProviderService,
  SearchData,
} from "src/app/Shared/data-provider.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  iconStar = faStar;
  products: Product[] = [];
  isLoading: boolean = false;
  data: SearchData[] = [];
  dataDropdownFashion: CategoryData[] = [];
  dataDropDownElectronics: CategoryData[] = [];
  dataDropDownHome: CategoryData[] = [];
  dataDropDownBeauty: CategoryData[] = [];
  dataDropDownTwoWheelers: CategoryData[] = [];
  heroImages: { thumbImage: string }[] = [
    { thumbImage: "assets/Images/heroSliderImg1.jpg" },
    { thumbImage: "assets/Images/heroSliderImg3.jpg" },
    { thumbImage: "assets/Images/heroSliderImg2.jpg" },
  ];

  constructor(
    private productService: ProductService,
    private dataProvider: DataProviderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    const newProducts = await this.productService.getAllProducts();
    this.products = newProducts;
    this.isLoading = false;
    this.dataProvider.getAllData().then((data: AllData) => {
      this.data = data.searchData;
      this.dataDropdownFashion = data.homeDropdownData.fashion;
      this.dataDropDownElectronics = data.homeDropdownData.electronics;
      this.dataDropDownHome = data.homeDropdownData.home;
      this.dataDropDownBeauty = data.homeDropdownData.beauty;
      this.dataDropDownTwoWheelers = data.homeDropdownData.twoWheelers;
    });
  }

  getProductsByCategory(category: "electronics" | "beauty"): Product[] {
    let filtered = [
      ...this.products.filter(
        (product: Product) => product.category === category
      ),
    ];
    return filtered;
  }

  slideImage(slider: NgImageSliderComponent, move: "next" | "prev"): void {
    if (move === "next") {
      slider.next();
    } else {
      slider.prev();
    }
  }

  slidePrev(slider: NgxslickComponent) {
    slider.showPrev();
  }
  slideNext(slider: NgxslickComponent) {
    slider.showNext();
  }
}
