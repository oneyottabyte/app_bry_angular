import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-index',  
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  funcionarios!: Funcionario[];

  constructor(public funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe(
      (data: | Funcionario[]) => { this.funcionarios = data;
      console.log(this.funcionarios);
      })
  }

  deleteFuncionario(id:number){
    this.funcionarioService.delete(id).subscribe(res => {
      this.funcionarios = this.funcionarios.filter(item => item.id !== id);
      console.log('funcionario deleted successfully');
    })
  }
}
