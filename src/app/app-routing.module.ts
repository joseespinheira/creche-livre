import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AuthGuard } from './servicos/auth.guard';
import { ProfileGuard } from './servicos/profile.guard';

const routes: Routes = [
  {
    path: 'matricula',
    loadChildren: () => import('./adm/adm.module').then((m) => m.AdmModule),
    canActivate: [ProfileGuard]
  },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
