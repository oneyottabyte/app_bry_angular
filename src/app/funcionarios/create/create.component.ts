import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public funcionarioService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.funcionarioService.create(this.form.value).subscribe((res:any) => {
         console.log('Funcionario Criado com sucesso!');
         this.router.navigateByUrl('funcionarios');
    })
  } 
}
