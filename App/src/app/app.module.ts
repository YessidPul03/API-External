import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApimasalcanceService } from './service/apimasalcance.service';
import { CommonModule } from '@angular/common';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EditarPeticionComponent } from './peticiones/editar-peticion/editar-peticion.component';
import { EliminarPeticionComponent } from './peticiones/eliminar-peticion/eliminar-peticion.component';
import { CrearPeticionComponent } from './peticiones/crear-peticion/crear-peticion.component';
import { ListarPeticionesComponent } from './peticiones/listar-peticiones/listar-peticiones.component';
import { ApimasalcancePeticionesService } from './service/apimasalcance-peticiones.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnDBService } from './service/conn-db.service';
import { DbpeticionService } from './shared/dbpeticion.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeticionesComponent,
    AlbumesComponent,
    NavegacionComponent,
    EditarPeticionComponent,
    EliminarPeticionComponent,
    CrearPeticionComponent,
    ListarPeticionesComponent,
    MatSnackBar
  ],
  imports: [
    BrowserModule,
    HttpClient,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FormGroup,
    RouterModule.forRoot(routes, {useHash: true})
   
  ],
  exports: [
    HomeComponent
  ],  
  providers: [
    ApimasalcanceService,
    ApimasalcancePeticionesService,
    DbpeticionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
