import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit{
  route:string = '';
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(!(event instanceof NavigationEnd)) return;
      this.route = location.pathname;
    })
  }
}
