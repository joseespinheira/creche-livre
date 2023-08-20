import { Component } from '@angular/core';
import { EmitterService } from '../shared/EmitterService/emitter.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  ngOnInit(): void {
  }
  
  ionViewDidEnter(){
    EmitterService.nomePaginaEmitter.emit("Tab 33")
  }
}
