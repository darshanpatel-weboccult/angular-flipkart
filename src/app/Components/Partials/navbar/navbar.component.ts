import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  faArrowTrendUp,
  faBell,
  faCartShopping,
  faChevronDown,
  faDownload,
  faMagnifyingGlass,
  faQuestionCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  searchIcon = faMagnifyingGlass;
  cartIcon = faCartShopping;
  chevronIcon = faChevronDown;
  closeIcon = faXmark;
  bellIcon = faBell;
  helpIcon = faQuestionCircle;
  advertiseIcon = faArrowTrendUp;
  downloadIcon = faDownload;
  showLogin: boolean = false;

  constructor(private router: Router) {}

  changeShowLogin() {
    if (this.router.url.includes("login")) return;
    this.showLogin = true;
  }
  navigate(...path: string[]): void {
    this.router.navigate(path);
  }
}
