import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.empresaService.create(this.form.value).subscribe((res:any) => {
         console.log('Empresa Criada com sucesso!');
         this.router.navigateByUrl('empresa');
    })
  } 
}
