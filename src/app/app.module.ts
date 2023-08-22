import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdmModule } from './adm/adm.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatMenuModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule,
    CoreModule, 
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
