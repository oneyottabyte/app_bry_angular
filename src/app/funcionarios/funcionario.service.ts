import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Funcionario } from './funcionario';

import { environment } from '../../environments/environment';

const apiURL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(apiURL + '/funcionario')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  addEmpresa(dados: any): Observable<any> {
    return this.httpClient.post<any>(apiURL + '/funcionario/empresa', JSON.stringify(dados), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  create(funcionario: any): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(apiURL + '/funcionario', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(apiURL + '/funcionario/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, funcionario: any): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(apiURL + '/funcionario/' + id, JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Funcionario>(apiURL + '/funcionario/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}