import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditarPeticionComponent } from './editar-peticion/editar-peticion.component';
import { EliminarPeticionComponent } from './eliminar-peticion/eliminar-peticion.component';
import { CrearPeticionComponent } from './crear-peticion/crear-peticion.component';
import { ListarPeticionesComponent } from './listar-peticiones/listar-peticiones.component';

@Component({
  selector: 'app-peticiones',
  standalone: true,
  imports: [EditarPeticionComponent,
    EliminarPeticionComponent,
    CrearPeticionComponent,
    ListarPeticionesComponent],
  templateUrl: './peticiones.component.html',
  styleUrl: './peticiones.component.scss'
})
export class PeticionesComponent implements OnInit{

  constructor(private router: Router) { }

  goToEditRequest() {
    this.router.navigate(['/editarpeticion']); // Navega a la página de inicio
  }
  goToDeleteRequest() {
    this.router.navigate(['/eliminarpeticion']); // Navega a la página de contacto
  }
  goToCreateRequest() {
    this.router.navigate(['/crearpeticion']); // Navega a la página de contacto
  }
  goToListRequest() {
    this.router.navigate(['/listarpeticiones']); // Navega a la página de contacto
  }

  ngOnInit(): void {
    
  }
}
