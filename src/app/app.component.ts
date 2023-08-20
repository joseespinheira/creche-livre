import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;

  title = 'my-app-angular';
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  onLogoutClick(){}
}