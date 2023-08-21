import { Component, DoCheck } from '@angular/core';
import { AuthGuard } from './servicos/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  isLogin: boolean = false;

  teste = "";
  title = 'my-app-angular';

  constructor(private authGuard: AuthGuard) {  }

  ngDoCheck(): void {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      // Converte o JSON de volta para um objeto
      const user = JSON.parse(authUser);
      this.teste = user.role;
      if (user.id > 0) 
        this.isLogin = true;
      else
        this.isLogin = false;
    }
  }

  logout() {
    this.authGuard.logout();
    this.isLogin = false;
  }
}
