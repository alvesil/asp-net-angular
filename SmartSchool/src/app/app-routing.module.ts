import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';

const routes: Routes = [
  { path: 'professores', component: ProfessoresComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'perfil', component: AlunosComponent},
  { path: 'dashboard', component: AlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
