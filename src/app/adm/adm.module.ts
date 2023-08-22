import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdmRoutingModule } from './adm-routing.module';
import { FormsModule } from '@angular/forms';
import { MatriculaComponent } from './matricula/matricula.page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MatriculaComponent
  ],
  imports: [
    FormsModule,
    AdmRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdmModule { }
