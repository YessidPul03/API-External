import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { NotFoundError } from 'rxjs';
import { EditarPeticionComponent } from './peticiones/editar-peticion/editar-peticion.component';
import { EliminarPeticionComponent } from './peticiones/eliminar-peticion/eliminar-peticion.component';
import { CrearPeticionComponent } from './peticiones/crear-peticion/crear-peticion.component';
import { ListarPeticionesComponent } from './peticiones/listar-peticiones/listar-peticiones.component';

export const routes: Routes = [
//{path: '', component: AppComponent},
{path: 'home', component: HomeComponent},
{path: 'peticiones', component: PeticionesComponent},
{path: 'editarpeticion', component: EditarPeticionComponent},
{path: 'eliminarpeticion', component: EliminarPeticionComponent},
{path: 'crearpeticion', component: CrearPeticionComponent},
{path: 'listarpeticiones', component: ListarPeticionesComponent},
{path: 'albumes', component: AlbumesComponent},
{ path: '', pathMatch: 'full', redirectTo: '/'},
{ path: '**', pathMatch: 'full', component: NotFoundError},
];