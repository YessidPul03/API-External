import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApimasalcancePeticionesService {

  private urlApi = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  // getQuery(query: string){
  //   const url=`https://jsonplaceholder.typicode.com/${query}`;

  //   return this.http.get(url)
  // }

  public getDataUsers():Observable<any> {
    return this.http.get(`${this.urlApi}/users`);
    //return this.http.get<any>(this.urlApi)
  }

  public getPosts():Observable<any>{
    return this.http.get(`${this.urlApi}/posts`)
  }

  public getPostId(id: number): Observable<any>{
    return this.http.get(`${this.urlApi}/posts/${id}`)
    // (`posts?userId=${userid}`);
  }

  // Operación para Actualizar un POSTS
  public updatePost(id: number, newData: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/posts/${id}`, newData);
  }

  // Operación para Crear un POSTS
  public createPostUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/posts`, data);
  }

  public getPostUsers(userid: string): Observable<any>{
    return this.http.get(`${this.urlApi}/posts?userId=${userid}`);
  }

  // Operación para Eliminar un POSTS
  public deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/posts/${id}`);
  }

  // Operación para Listar Peticiones Realizadas de la BD

}
