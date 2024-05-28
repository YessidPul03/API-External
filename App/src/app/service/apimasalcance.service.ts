import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApimasalcanceService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url=`https://jsonplaceholder.typicode.com/${query}`;

    return this.http.get(url)
  }
 // private urlApi = 'https://jsonplaceholder.typicode.com/users'


  public getDataUsers():Observable<any> {
    return this.getQuery(`users`);
    //return this.http.get<any>(this.urlApi)
  }

  public getPostUsers(userid: string): Observable<any>{
    return this.getQuery(`posts?userId=${userid}`);
  }

  public getAlbumesUsers(userId: number):Observable<any>{
    return this.getQuery(`users/${userId}/albums`)
  }
  
  // public getAlbumesUsersID((userid: string):Observable<any>{
  //   return this.getQuery(`albums?userId=${userid}`)
  // }
}
