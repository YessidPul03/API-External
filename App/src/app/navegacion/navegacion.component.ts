import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PeticionesComponent } from '../peticiones/peticiones.component';
import { AlbumesComponent } from '../albumes/albumes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [HomeComponent,PeticionesComponent,AlbumesComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {

  constructor(private router: Router) { }

  goToHomePage() {
    this.router.navigate(['/home']); // Navega a la página de inicio
  }
  goToRequestsPage() {
    this.router.navigate(['/peticiones']); // Navega a la página de contacto
  }
  goToAlbumesPage() {
    this.router.navigate(['/albumes']); // Navega a la página de contacto
  }
}
