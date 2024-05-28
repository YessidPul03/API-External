import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApimasalcancePeticionesService } from '../../service/apimasalcance-peticiones.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-peticion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-peticion.component.html',
  styleUrl: './crear-peticion.component.scss'
})
export class CrearPeticionComponent implements OnInit{
  
  posts: any[] = [];
  nuevoPost: any = {};
  userId: number | undefined;

  constructor(private serviceRequest: ApimasalcancePeticionesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  createPost(): void {
    
    if (this.nuevoPost.userId && this.nuevoPost.title && this.nuevoPost.body){
      this.nuevoPost.userId = this.userId;

      this.serviceRequest.createPostUser(this.nuevoPost)
      .subscribe(data => {
        this.openSnackBar('Post creado exitosamente!!', 'Aceptar');
        console.log('Post creado exitosamente!!:', data);
        this.posts.push(data); //Insertar el nuevo post en ultima posición
        this.nuevoPost = {}; //Limpiar el formulario una ver se crea el Post
        console.log('Peticion insertada a la base de datos');
      });
    }else {
      this.openSnackBar('Por favor, complete todos los campos.', 'Cerrar');
      console.error('Por favor, complete todos los campos.');
    }
  }

  obtPost(id: string){
    this.serviceRequest.getPostUsers(id).subscribe((data: any) => {
      console.log('Posts del usuario:', data);
      this.posts=data})
  }

  // Metodos para mostra mensajes de dialogo (Confirmation, Error)
  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, // Duración en milisegundos
    });
  }
}
