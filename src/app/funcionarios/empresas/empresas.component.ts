import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  id!: string;
  form!: FormGroup;
  
  constructor(public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      funcionario_id: new FormControl(),
      empresa_id: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.form.value.funcionario_id = this.id;
    console.log(this.form.value);
    this.funcionarioService.addEmpresa(this.form.value).subscribe((res: any) => {
      console.log('Associado com sucesso');
      this.router.navigateByUrl('funcionarios');
    })

  }

}
