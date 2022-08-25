import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  empresa!: Empresa;

  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     let id = this.route.snapshot.params['id'];
         
    this.empresaService.find(id).subscribe((data: Empresa)=>{
      this.empresa = data;
    });
  }

}
