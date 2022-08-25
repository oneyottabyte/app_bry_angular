import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  id!: string;
  form!: FormGroup;

  constructor(public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      funcionario_id: new FormControl('', Validators.required),
      empresa_id: new FormControl()
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.form.value.empresa_id = this.id;
    console.log(this.form.value);
    this.empresaService.addFuncionario(this.form.value).subscribe((res: any) => {
      console.log('Associado com sucesso');
      this.router.navigateByUrl('/empresa');
    })

  }

}
