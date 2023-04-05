import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sliderHero') heroSlider!: NgImageSliderComponent;
  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  heroImages: any[] = [
    { thumbImage: 'assets/Images/heroSliderImg1.jpg' },
    { thumbImage: 'assets/Images/heroSliderImg3.jpg' },
    { thumbImage: 'assets/Images/heroSliderImg2.jpg' },
  ];
  ngAfterViewInit(): void {
    console.log(this.heroSlider);
  }
  slideImage(slider: NgImageSliderComponent, move: 'next' | 'prev'):void{
    if(move === 'next'){
      slider.next();
    }else{
      slider.prev();
    }
  };
}
