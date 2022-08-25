import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empresas!: Empresa[];

  constructor(public empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(
      (data: Empresa[]) => { this.empresas = data;
      console.log(this.empresas);
      })
  }

  deleteEmpresa(id:number){
    this.empresaService.delete(id).subscribe(res => {
      this.empresas = this.empresas.filter(item => item.id !== id);
      console.log('Empresa deleted successfully');
    })
  }
}
