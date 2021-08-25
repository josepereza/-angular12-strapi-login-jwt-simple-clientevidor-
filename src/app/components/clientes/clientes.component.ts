import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes:any[]=[]
  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getClientes().subscribe((data:any)=>{
      this.clientes=data;
    })
  }

}
