import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {catchError, map,tap } from 'rxjs/operators'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario$ = new Subject();
  login$=new Subject();
  public _usuario!:any

  constructor(private http:HttpClient) { 
    this.validarToken();
    
  }

  getClientes(){
    const headers=new HttpHeaders()
.set('Authorization' ,`Bearer ${localStorage.getItem('token')}`);
    return this.http.get("http://localhost:1337/clientes",{headers})
  }

  validarToken(){
    const url="http://localhost:1337/users/me"
const headers=new HttpHeaders()
.set('Authorization' ,`Bearer ${localStorage.getItem('token')}`);
    return this.http.get( url,{headers}) 
    .pipe(
      map((resp:any)=>{
this._usuario=resp.username
console.log('mi usuario', resp)
this.login$.next('Logout')
this.usuario$.next(resp.username)
        return true;
      }),
      catchError(err=>of(false))
    )
  }
  logout(){
    this.login$.next('Login')
    this.usuario$.next('')
    localStorage.removeItem('token')
  }

  login(objeto:Object){
    const url='http://localhost:1337/auth/local'
    const body=objeto
    return this.http.post(url,body)
    .pipe(
      tap ((resp:any)=>{
        console.log(resp)
        localStorage.setItem('token',resp.jwt)
        if(resp.user.confirmed) {
          this.usuario$.next(resp.user.username)
          this._usuario=resp.user.username
          console.log(this._usuario)
        }
    
      })
    )
      }
}
