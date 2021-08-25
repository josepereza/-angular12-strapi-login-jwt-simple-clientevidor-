import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosGuard } from './usuarios.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'clientes',  canActivate: [UsuariosGuard], component:ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
