import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './pages/matricula/matricula.page';
import { AuthGuard } from '../servicos/auth.guard';
import { MatriculadosComponent } from './pages/matriculados/matriculados.page';

const routes: Routes = [
  { 
    path: '', 
    component: MatriculaComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'listar', 
    component: MatriculadosComponent,
    canActivate: [AuthGuard] 
  },  
  { 
    path: 'pagamento', 
    component: MatriculadosComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
