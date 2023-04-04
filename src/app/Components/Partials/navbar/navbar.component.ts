import { Component } from '@angular/core';
import { faCartShopping, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchIcon = faMagnifyingGlass
  cartIcon = faCartShopping
  chevronIcon = faChevronDown
}
