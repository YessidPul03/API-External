import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApimasalcancePeticionesService } from '../../service/apimasalcance-peticiones.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-peticion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eliminar-peticion.component.html',
  styleUrl: './eliminar-peticion.component.scss'
})
export class EliminarPeticionComponent implements OnInit{

  posts: any[] = [];
  postId: number | undefined;

  constructor(private serviceRequest: ApimasalcancePeticionesService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.obtPost();
  }

  obtPost(){
    this.serviceRequest.getPosts().subscribe((data) => {
      console.log('Posts', data);
      this.posts=data})
  }

  delePost(){
    if(this.postId){
      this.serviceRequest.deletePost(this.postId).subscribe(() => {
        this.openSnackBar('Eliminación de Post Exitosa!!', 'Aceptar');
        console.log('Post Eliminado', this.postId);
        
        this.posts = this.posts.filter(post => post.id !== this.postId);
        
        console.log('Peticion insertada a la base de datos');
      });
    }
  }

  // Metodos para mostra mensajes de dialogo (Confirmation, Error)
  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, // Duración en milisegundos
    });
  }
}
