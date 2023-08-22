import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './matricula/matricula.page';
import { AuthGuard } from '../servicos/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: MatriculaComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
