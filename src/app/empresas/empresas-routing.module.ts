import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FuncionarioComponent } from './funcionarios/funcionario.component';

const routes: Routes = [
  { path: 'empresa', component: IndexComponent },
  { path: 'empresa/:id/view', component: ViewComponent },
  { path: 'empresa/create', component: CreateComponent },
  { path: 'empresa/:id/update', component: UpdateComponent }, 
  { path: 'empresa/:id/funcionario', component: FuncionarioComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
