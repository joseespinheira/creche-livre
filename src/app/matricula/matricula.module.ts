import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatriculaPageRoutingModule } from './matricula-routing.module';

import { MatriculaPage } from './matricula.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MatriculaPageRoutingModule
  ],
  declarations: [MatriculaPage]
})
export class MatriculaPageModule {}
