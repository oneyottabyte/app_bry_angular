import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/funcionarios', pathMatch: 'full'},
  { path: 'funcionarios', component: IndexComponent },
  { path: 'funcionarios/:id/view', component: ViewComponent },
  { path: 'funcionarios/create', component: CreateComponent },
  { path: 'funcionarios/:id/update', component: UpdateComponent }, 
  { path: 'funcionarios/:id/empresas', component: EmpresasComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
