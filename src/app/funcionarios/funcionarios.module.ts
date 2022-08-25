import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { EmpresasComponent } from './empresas/empresas.component';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    EmpresasComponent,
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
