import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(res => {
        console.log(res);
        this.router.navigate([ '/' ]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
