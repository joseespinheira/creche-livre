import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdmRoutingModule } from './adm-routing.module';
import { FormsModule } from '@angular/forms';
import { MatriculaComponent } from './matricula/matricula.page';

@NgModule({
  declarations: [
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdmRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdmModule { }
