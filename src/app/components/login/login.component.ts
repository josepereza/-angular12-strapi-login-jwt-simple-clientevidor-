import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    identifier:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })    
    constructor(private router:Router, private fb:FormBuilder, private usuarioService:UsuariosService) { }
  
    ngOnInit(): void {
    }
  login(){
    // this.authService.validarToken().subscribe(resp=>{
    //   console.log(resp)
    // })
     console.log(this.formulario.value)
     const {identifier, password} =this.formulario.value
   this.usuarioService.login(this.formulario.value).subscribe(
     (res:any)=>{console.log(res.user)
     if(res.user.confirmed){
       this.router.navigateByUrl('/clientes')
     }
     }
   )
  }
  }
