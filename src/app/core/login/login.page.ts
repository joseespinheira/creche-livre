import { Component } from '@angular/core';
import { AuthService } from './servico/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    this.authService
      .authenticate(this.username, this.password)
      .subscribe((data) => {
        if (data[0]?.id) {
          localStorage.setItem('authUser', JSON.stringify(data[0]));
          this.router.navigate(['/home']);
        } else {
          alert('Usuario ou senha invalido');
        }
      });
  }
}
