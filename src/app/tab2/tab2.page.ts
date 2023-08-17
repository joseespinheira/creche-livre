import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmitterService } from '../shared/EmitterService/emitter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @Output() nomeMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }
  
  ionViewDidEnter(){
    EmitterService.nomePaginaEmitter.emit("Tab 2")
  }
}
