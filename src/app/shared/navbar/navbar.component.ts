import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
milogin:any='Login'
usuario:any='';
  constructor(private usuarioService:UsuariosService,private router:Router ) { }

  ngOnInit(): void {
   this.usuarioService.login$.subscribe(data=>this.milogin=data);
   this.usuarioService.usuario$.subscribe(data=>this.usuario=data)
  }
login(){
  console.log('pato')
if (this.usuarioService._usuario){
  this.milogin='login'
  this.usuarioService.logout()
  this.router.navigateByUrl('/login')
}else {

  if (this.usuarioService._usuario){
      this.milogin='Logout'

  }
this.router.navigateByUrl('/login')
}
}
}
