import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empresa } from './empresa';
import { environment } from '../../environments/environment';

const apiURL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
    
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(apiURL + '/empresa')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  addFuncionario(empresa: any): Observable<any> {
    return this.httpClient.post<any>(apiURL + '/empresa/funcionario', JSON.stringify(empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  create(empresa: any): Observable<Empresa> {
    return this.httpClient.post<Empresa>(apiURL + '/empresa', JSON.stringify(empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(apiURL + '/empresa/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, empresa: any): Observable<Empresa> {
    return this.httpClient.put<Empresa>(apiURL + '/empresa/' + id, JSON.stringify(empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Empresa>(apiURL + '/empresa/' + id, this.httpOptions)
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