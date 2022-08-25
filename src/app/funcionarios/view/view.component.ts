import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  funcionario!: Funcionario;

  constructor(
    public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
     let id = this.route.snapshot.params['id'];
         
    this.funcionarioService.find(id).subscribe((data: Funcionario)=>{
      this.funcionario = data;
    });
  }

}
