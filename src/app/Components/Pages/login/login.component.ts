import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSignup!: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isSignup = params['signup'] === 'true';
    });
  }
  navigate(params: { [key: string]: string }, ...path: string[]): void {
    this.router.navigate(path, { queryParams: params });
  }

  signupToggle(newVal: boolean) {
    if (this.router.url.includes('login')) {
      this.navigate({ signup: newVal.toString() }, 'login');
    } else {
      this.isSignup = newVal;
    }
  }
}
