import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loggedInUser: string;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.authService.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    if (this.authService.isLoggedIn === true) {
      this.authService.logout();
      this.authService.isLoggedIn = false;
    } else {
      this.authService.login(this.email, this.password)
        .then(res => {
          console.log(res);
          this.router.navigate([ '/' ]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  registerBtnClick() {
    this.router.navigate(['auth/register']);
  }
}
