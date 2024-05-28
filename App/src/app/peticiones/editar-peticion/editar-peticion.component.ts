import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApimasalcancePeticionesService } from '../../service/apimasalcance-peticiones.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { peticionModel } from '../../shared/bdpeticion.model';
import { DbpeticionService } from '../../shared/dbpeticion.service';

@Component({
  selector: 'app-editar-peticion',
  standalone: true,
  imports: [CommonModule,
            FormsModule],
  templateUrl: './editar-peticion.component.html',
  styleUrl: './editar-peticion.component.scss'
})
export class EditarPeticionComponent implements OnInit {

  postId: number | undefined;
  post: any;
  editedPost: any = {};
  users: any[]=[];

  constructor(private serviceRequest: ApimasalcancePeticionesService,
    private _snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private peticion: DbpeticionService)
    {
    }

  ngOnInit(): void {
    this.serviceRequest.getDataUsers().subscribe(data => {
      this.users = data;
      console.log(data)});
    
    //this.obtPost();
  }

  obtPost(){
    if(this.postId){
      this.serviceRequest.getPostId(this.postId).subscribe((data: any) => {
        console.log(data);
        if(!this.editedPost){
          this.editedPost = { ...data };
        }
        this.post=data})
    }
  }

  savePost() {
    if(this.postId && this.editedPost){
      //En pantalla puedo ver que los valores esten asignados correctamente
      // console.log(this.postId, this.editedPost); 

      // Mantener el ID del post y el ID de usuario igual
      this.editedPost.id = this.post.id;
      this.editedPost.userId = this.post.userId;

      this.serviceRequest.updatePost(this.postId, this.editedPost).subscribe(() => {
        console.log("Actualización Exitosa!!");
        this.openSnackBar('Actualización Exitosa!!', 'Aceptar');

        // Actualizar el post después de editar
        this.obtPost();
        // Asignar editedPost a post para reflejar los cambios en la interfaz de usuario
        this.post = { ...this.editedPost };
        // Forzar la detección de cambios manualmente
        this.cdr.detectChanges();

        const bdpeticion = new peticionModel('', this.post.userId ,'PUT', this.post, '');

        // this.peticion.insertarPeticion(bdpeticion).subscribe(data => {
        //   console.log('Peticion insertada a la base de datos');
        // });
        console.log('Peticion insertada a la base de datos');
      });
    }else {
      this.openSnackBar('postId o editedPost es nulo o indefinido.','Cerrar')
      console.error("postId o editedPost es nulo o indefinido.");
    }
  }
  

  //Metodo para el registro de datos a la base de datos
  // registerPutMethod(formValue: any) {
  //   this.http.post<any>(`http://localhost:3000/insertedata`, formValue).subscribe(
  //     response => {
  //       console.log('Datos insertados con éxito:', response);
  //       // Puedes hacer alguna acción adicional aquí, como mostrar un mensaje de éxito
  //     },
  //     error => {
  //       console.error('Error al insertar datos:', error);
  //       // Maneja el error apropiadamente
  //     }
  //   );
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, // Duración en milisegundos
    });
  }
}
