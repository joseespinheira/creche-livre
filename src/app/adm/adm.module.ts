import { NgModule } from '@angular/core';

import { AdmRoutingModule } from './adm-routing.module';
import { FormsModule } from '@angular/forms';
import { MatriculaComponent } from './pages/matricula/matricula.page';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatriculadosComponent } from './pages/matriculados/matriculados.page';
import { RegistroPagamentoComponent } from './pages/registro-pagamento/registro-pagamento.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RegistraPagamentoComponent } from './components/registra-pagamento/registra-pagamento';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    MatriculaComponent,
    MatriculadosComponent,
    RegistroPagamentoComponent,RegistraPagamentoComponent
  ],
  imports: [
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    CurrencyMaskModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    CommonModule,
    MatExpansionModule,
    AdmRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AdmModule {}
