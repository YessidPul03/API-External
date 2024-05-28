import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { peticionModel } from './bdpeticion.model';

@Injectable({
  providedIn: 'root'
})
export class DbpeticionService {

  bd_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listarPeticiones() {
    return this.http.get<peticionModel[]>(this.bd_url+'/listar-peticiones');
  }

  insertarPeticion(peticion: peticionModel){
    return this.http.post<string>(`${this.bd_url}/peticiones/insertar`, peticion);
  }
}
