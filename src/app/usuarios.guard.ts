import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosGuard implements CanActivate {
  constructor(private usuarioService:UsuariosService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.usuarioService.validarToken()
      .pipe(
        tap((valid:any)=>{
          if(!valid){
            this.router.navigateByUrl('/login')
          }
        })
      )
  }
  
}
