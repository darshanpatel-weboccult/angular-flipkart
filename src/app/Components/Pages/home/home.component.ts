import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { NgImageSliderComponent } from 'ng-image-slider';
import { NgxslickComponent } from 'ngx-simple-slick';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sliderHero') heroSlider!: NgImageSliderComponent;
  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  iconStar = faStar;
  heroImages: any[] = [
    { thumbImage: 'assets/Images/heroSliderImg1.jpg' },
    { thumbImage: 'assets/Images/heroSliderImg3.jpg' },
    { thumbImage: 'assets/Images/heroSliderImg2.jpg' },
  ];
  data: { name: string; data: string[] }[] = [
    {
      name: 'MOST SEARCHED FOR ON FLIPKART:',
      data: [
        'Flipkart Axis Bank Super Elite Credit card',
        'Primebook Laptops',
        'Bounce Infinity E1',
        'Buy Laptop on EMI',
        'Infinix Zero Book Ultra',
        'OPPO Reno8 5G',
        'OPPO Reno8 Pro 5G',
        'Fresh Flower Bouquet',
        'Electric Cycles',
        'Badminton',
        'Bouquet',
        'Oneplus Monitors',
        'Sell Old Mobile Phones',
        'Premium Laptops',
        'Electronics Store',
        'Phone cover',
        'Infinix INBook Y1 Plus',
        'Okaya Electric Vehicles',
        'bgauss electric scooter',
        'OPPO Reno7 Pro 5G',
        'iPhone 13',
        'iPhone 13 Pro',
        'iPhone 13 Pro Max',
        'iPhone 13 Mini',
        'Google Pixel 6a covers',
        'Flipkart Quick',
        'Ampere Magnus',
        'Flipkart Help Centre',
        'Online Boat Store',
        'Covers from Rs 99',
        'Flipkart Track Orders',
        'Flipkart Manage Orders',
        'Flipkart Return Orders',
        'Flipkart Gift Cards Store',
        'Flipkart Axis Bank Credit Card',
        'Flipkart Pay Later',
      ],
    },
    {
      name: 'MOBILES:',
      data: [
        'iPhone 12 64GB',
        'iPhone 12 Pro 512GB',
        'iPhone 12 128GB',
        'Vivo Y91i',
        'Vivo Y11',
        'Vivo Y15',
        'Vivo Y50',
        'Vivo Y12',
        'Reno2 F',
        'Oppo A12',
        'Oppo F15',
        'Oppo A31',
        'Samsung A71',
        'Samsung A51',
        'Samsung A31',
        'Realme X2',
        'iPhone 11',
        'iPhone 11 Pro',
        'Mobile Cover',
        'Mobile Offers',
        'iphone x',
        '4G Mobile',
        'Nokia Mobile',
        'Samsung Mobile',
        'iphone',
        'Oppo Mobile',
        'Vivo Mobile',
      ],
    },
    {
      name: 'CAMERA:',
      data: [
        'GoPro Action Camera',
        'Nikon Camera',
        'Canon Camera',
        'Sony Camera',
        'Canon DSLR',
        'Nikon DSLR',
      ],
    },
    {
      name: 'LAPTOPS:',
      data: [
        'MacBook Pro M2',
        'Premium Laptop',
        'ASUS ROG Strix SCAR 16 (2023) Core i9 13th Gen',
        'ASUS ROG Zephyrus M16 (2023) Core i9 13th Gen',
        'ASUS Zenbook 14 OLED (2022)',
        'Realme Book Prime Core i5 11th Gen',
        'Microsoft Surface Go Pentium 128GB',
        'Branded Laptops',
        'Apple Laptops',
        'Acer Laptops',
        'Lenovo Laptops',
        'Dell Laptops',
        'Asus Laptops',
        'HP Laptops',
        'Gaming Laptops',
        '2 in 1 Laptops',
        'Laptops',
        'Dell latest laptops 2022',
        'HP latest laptops 2022',
        'Infinix INBook Y1 Plus',
        'SAMSUNG Galaxy Book3',
        '12th Gen Intel Core Laptops',
      ],
    },
    {
      name: 'TVS:',
      data: [
        'Nokia TV',
        'Panasonic TV',
        'Thomson TV',
        'Vu TV',
        'Realme TV',
        'Motorola TV',
        'OnePlus TVs',
        'LG TV',
        'TV',
        'Sony TV',
        'Samsung TV',
        'Android Television',
        'Iffalcon Tv',
        'Mi TV',
      ],
    },
    {
      name: 'LARGE APPLIANCES:',
      data: [
        'TV & Appliances End of Season Sale',
        'Television',
        'Washing Machines',
        'Refrigerators',
        'Air Conditioners',
        'Electric Cookers',
        'Electric Jug(Heater) / Travel Kettles',
        'Induction Cooktops',
        'Inverters / stabilizer',
        'Irons / Iron Box',
        'Mixer Grinder Juicer',
        'Wet Grinders',
        'Chimneys',
        'Microwave Ovens',
        'Vacuum Cleaners',
        'Water Purifier',
        'Fan',
        'MarQ Customer Care',
      ],
    },
    {
      name: 'CLOTHING:',
      data: [
        'Men Shirts',
        'Kurta Pajama',
        'Kurtas',
        'Men T-Shirts',
        'Jeans',
        'Saree',
        'Dresses',
        'Kids Dresses',
        'Designer Salwar Suits',
        'Bra',
        'Designer Kurtis',
        'Track Pant',
        'Men Kurtas',
        'Gym Wear',
        'Party Dresses',
        'Palazzo Suits',
        'Boys Clothing',
        'Gloves',
        'Nighty',
        'Maxi Dresses',
        'Anarkali',
        'Gowns',
        'Culottes',
        'Salwar Suits',
        'Kurtis',
        'Designer Sarees',
        'Leggings',
        'Shorts',
        'Georgette Sarees',
        'Ethnic Wear',
        'Briefs & Trunks',
        'Nike Watches',
        'Ascot Tie',
        'Corset Tops Tunics',
        'Leather PU Skirts',
        'Corset tops camisoles',
        'Women magenta earrings',
        'No collar jackets',
        'Green dress material',
        'Black patiala kurta set',
        'Men camel shoes casual',
        'Black pathani',
        'Tassel Sarees',
        'Khaki dresses',
        'Kids formal dresses',
        'Mauve shirts',
        'Women henley',
        'uppada pattu sarees',
        'Leopard dresses',
        'Sleeveless shrugs',
      ],
    },
    {
      name: 'FOOTWEAR:',
      data: [
        'Shoes',
        'Adidas Shoes',
        'Reebok Shoes',
        'Nike Shoes',
        'Puma Shoes',
        'Boots',
        'Bata Shoes',
        'Woodland Shoes',
        'Skechers Shoes',
        'Sneakers',
        'Womens Boots',
        'Sports Shoes',
        'Loafers',
        'Sandals',
        'Lotto Sports Shoes',
        'Casual Shoes',
        'Womens Skechers Shoes',
        'Asics Sports Shoes',
        'Formal Shoes',
        'School Shoes',
      ],
    },
    {
      name: 'GROCERIES:',
      data: [
        'PhonePe Grocery Voucher',
        'Hand Wash',
        'Soap',
        'Cashew Nuts',
        'Sunflower Oil',
        'Eggs',
        'Toilet Cleaner',
        'Harpic Toilet Cleaner',
        'Dettol Soap',
        'Mustard Oil',
        'Biscuits',
        'Cheese',
        'Patanjali Atta',
        'Fortune Oil',
        'Aashirvaad Atta',
        'Tea',
      ],
    },
    {
      name: 'BEST SELLING ON FLIPKART:',
      data: [
        'Fire-Boltt Ninja Calling Pro Bluetooth Calling Smartwatch 1.69 inch HD Display Smartwatch',
        'Best Gas Geyser',
        'Kitchen Geyser',
        'Nutri Blenders',
        'Portable Air Cooler',
        'Best Air Cooler',
        'Bags',
        'Hitachi Refrigerator 3 Door',
        'Books',
        'Toys',
        'Candles',
        'Helmets',
        'Wall Clocks',
        'Baby Food',
        'Chocolates',
        'Cycles',
        'Calculators',
        'Lipsticks',
        'Mask',
        'Vertiv UPS',
        'Fastrack Watches',
        'Wallets',
        'Earrings',
        'Gold Coins',
        'Realme Pad Mini',
        'Handbags',
        'conekt SW2 Smartwatch',
        'Mivi DuoPods a350',
        'Speaker Cleaner',
      ],
    },
    {
      name: 'FURNITURE:',
      data: [
        'Furniture',
        'Sofas',
        'Beds',
        'Dining sets',
        'Wardrobes',
        'Mattresses',
        'TV Units',
        'Tables',
        'Chairs',
        'Shelves',
        'Bean Bags',
        'Office Chairs',
        'Computer Table',
        'Office Tables',
        'Red Sofa',
        'Wakefit Beds',
        'White Sofa',
        'Wakefit Mattress',
        'Green Sofa',
        'Black Sofa',
        'Brown Sofa',
      ],
    },
    {
      name: 'BGMH:',
      data: [
        'Whey Protein',
        'Homeopathy',
        'Cricket',
        'Cycles',
        'Footballs',
        'Treadmills',
        'Christmas Gifts',
        'Fitness Accessories',
        'Online Guitar',
        'Books Store',
        'Musical Instrument Store',
        'Dabur Chyawanprash',
        'Baidyanath Chyawanprash',
        'Energy Drinks',
        'Toys',
        'Milk Drink Mixes',
        'Rakhi',
        'Chyawanprash',
        'Indian Flag',
        'Protein Supplements',
      ],
    },
  ];

  ngAfterViewInit(): void {
    console.log(this.heroSlider);
  }
  slideImage(slider: NgImageSliderComponent, move: 'next' | 'prev'): void {
    if (move === 'next') {
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
    console.log(slider);
    
  }
}
