import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  funcionario!: Funcionario;
  form!: FormGroup;

  constructor(
    public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.funcionarioService.find(this.id).subscribe((data: Funcionario) => {
      this.funcionario = data;
    })
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.funcionarioService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Funcionario atualizado com sucesso!');
      this.router.navigateByUrl('funcionarios');
    })
  }
}
