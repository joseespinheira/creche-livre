import { Component, Output,EventEmitter, OnInit, OnChanges } from '@angular/core';
import { EmitterService } from '../shared/EmitterService/emitter.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @Output() nomeMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
 
  ngOnInit(): void {
  }

  ionViewDidEnter(){
    EmitterService.nomePaginaEmitter.emit("Tela X")
  }
}
