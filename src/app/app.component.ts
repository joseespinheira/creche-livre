import { Component, OnInit } from '@angular/core';
import { EmitterService } from './shared/EmitterService/emitter.service';
import { Tab1Page } from './tab1/tab1.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  nomeMenu = 'Creche-Livre'
  component = Tab1Page;

  constructor() {}

  ngOnInit(): void {
    EmitterService.nomePaginaEmitter.subscribe(data => { 
      if(data){
        this.nomeMenu = data;
      }
    });
  }
}
