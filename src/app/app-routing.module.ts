import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AuthGuard } from './servicos/auth.guard';
import { MatriculaComponent } from './adm/matricula/matricula.page';

const routes: Routes = [
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  { path: 'matricula', component: MatriculaComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' } // Rota para qualquer outra URL inválida

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
