import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import {
  faArrowTrendUp,
  faBell,
  faCartShopping,
  faChevronDown,
  faCircleUser,
  faDownload,
  faHeart,
  faMagnifyingGlass,
  faQuestionCircle,
  faTicket,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  searchIcon = faMagnifyingGlass;
  cartIcon = faCartShopping;
  chevronIcon = faChevronDown;
  closeIcon = faXmark;
  bellIcon = faBell;
  helpIcon = faQuestionCircle;
  profile = faCircleUser;
  heart = faHeart;
  ticket = faTicket;
  wallet = faWallet;
  advertiseIcon = faArrowTrendUp;
  downloadIcon = faDownload;
  showLogin: boolean = false;
  route: string = "";
  constructor(private router: Router, private rt: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(!(event instanceof NavigationEnd)) return;
      this.route = location.pathname;
    })
  }

  changeShowLogin(newVal: boolean) {
    if (this.router.url.includes("login")) return;
    document.getElementsByTagName("body")[0].style.overflowY = newVal
      ? "hidden"
      : "auto";
    this.showLogin = newVal;
  }
  navigate(...path: string[]): void {
    this.router.navigate(path);
  }
}
