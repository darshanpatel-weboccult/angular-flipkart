import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import {
  faCaretRight,
  faChevronRight,
  faHeart,
  faMagnifyingGlass,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Product, ProductService } from "src/app/Shared/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  chevronRight = faChevronRight;
  caretRight = faCaretRight;
  xMark = faXmark;
  star = faStar;
  heart = faHeart;
  search = faMagnifyingGlass;
  sliderVal: number[] = [0, 1000];
  sortby: string = "popularity";
  showBackToTop: boolean = false;
  popularSearches: string[] = [
    "Sarees",
    " Kurtis",
    "Lehenga",
    " Anarkali",
    "Gowns",
    "Palazzo",
    "Jackets",
    "Sweatshirts",
    "Dresses",
    "Bra",
    "Lingerie ",
    "Nighty",
    "Shorts",
    "Mens Kurta",
    "Kurta Pajama",
    "Designer Sarees",
    "Designer Kurtis",
    "Designer Salwar Suits",
  ];
  quickLinks: string[] = [
    "Arrow Jeans Topwear",
    "Pepe Jeans Topwear",
    "INDIAN TERRAIN Topwear",
    "Highlander Topwear",
    "Provogue Topwear",
    "FILA Topwear",
    "Tops",
    "METRONAUT Topwear",
    "WROGN Topwear",
    "Mast & Harbour Topwear",
    "LOUIS PHILIPPE Topwear",
    "M7 By Metronaut Topwear",
    "House of Pataudi Topwear",
    "Allen Solly Topwear",
    "ANOUK Topwear",
    "MONTREZ Topwear",
    "The Indian Garage Co. Topwear",
    "Arrow Sport Topwear",
    "PARX Topwear",
    "PROWL Topwear",
  ];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;
      this.products = [];
      this.getProducts();
    });
  }

  async ngOnInit(): Promise<void> {
    document.title = "Flipkart | Products";
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    let allProducts = await this.productService.getAllProducts();

    let updatedProducts: Product[] = [];
    while (updatedProducts.length < 40) {
      updatedProducts.push(
        allProducts[Math.floor(Math.random() * allProducts.length)]
      );
    }
    this.products = updatedProducts;
  }

  
  navigate(...path: string[]) {
    this.router.navigate(path);
  }

}
