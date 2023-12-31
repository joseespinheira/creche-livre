import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutingModule {}
