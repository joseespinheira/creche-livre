import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage {
  texto = '';
  role: number = 2;
  constructor() {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      // Converte o JSON de volta para um objeto
      const user = JSON.parse(authUser);
      
      this.role = user.role;

      switch (user.role) {
        case 1:
          this.texto = 'super';
          break;
        case 2:
          this.texto = 'Adm';
          break;
        case 3:
          this.texto = 'Pais';
          break;
      }
    }else
      this.role = 0;
  }
}
