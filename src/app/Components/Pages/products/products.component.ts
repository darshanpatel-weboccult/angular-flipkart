import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DataProviderService, ProductCategory } from 'src/app/Shared/data-provider.service';
import { ProductService } from 'src/app/Shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  chevronRight = faChevronRight;
  selectedCategory: number | null = null;
  productCategoryData: ProductCategory[] = [];
  caretRight = faCaretRight;
  showBackToTop: boolean = false;

  constructor(
    private dataProvider: DataProviderService,
    private productService: ProductService,
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.productCategoryData = await this.dataProvider.getProductDropdownData();
  }


  @HostListener("window:scroll")
  checkScroll() {
    this.showBackToTop =
      document.documentElement.scrollTop >= window.innerHeight * 2;
  }
  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  navigate(...path: string[]) {
    this.router.navigate(path);
  }

}
