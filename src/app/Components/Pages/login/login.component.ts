import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  faCaretRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  DataProviderService,
  ProductCategory,
} from "src/app/Shared/data-provider.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isSignup!: boolean;
  showDropdown!: boolean;
  chevronRight = faChevronRight;
  selectedCategory: number | null = null;
  productCategoryData: ProductCategory[] = [];
  caretRight = faCaretRight;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataProvider: DataProviderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.showDropdown = this.router.url.includes("login");

    this.productCategoryData = await this.dataProvider.getProductDropdownData();
    this.route.queryParams.subscribe((params) => {
      this.isSignup = params["signup"] === "true";
    });
  }
  navigate(params: { [key: string]: string }, ...path: string[]): void {
    this.router.navigate(path, { queryParams: params });
  }

  signupToggle(newVal: boolean) {
    if (this.router.url.includes("login")) {
      this.navigate({ signup: newVal.toString() }, "login");
    } else {
      this.isSignup = newVal;
    }
  }
}
