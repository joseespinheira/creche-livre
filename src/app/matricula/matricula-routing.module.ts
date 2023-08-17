import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaPage } from './matricula.page';

const routes: Routes = [
  {
    path: '',
    component: MatriculaPage
  },
  // {
  //   path: 'matricula',
  //   redirectTo: '/matricula',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MatriculaPageRoutingModule {}
