import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  empresa!: Empresa;
  form!: FormGroup;

  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaService.find(this.id).subscribe((data: Empresa) => {
      this.empresa = data;
    })
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.empresaService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Empresa atualizada com sucesso!');
      this.router.navigateByUrl('empresa');
    })
  }
}
