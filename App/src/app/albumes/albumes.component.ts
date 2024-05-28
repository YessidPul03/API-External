import { Component, OnInit } from '@angular/core';
import { ApimasalcanceService } from '../service/apimasalcance.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-albumes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.scss'
})
export class AlbumesComponent implements OnInit{
  users: any[]= [];
  albumSelect: any[] = [];

  constructor(private service: ApimasalcanceService){

  }

  ngOnInit():void{
    this.service.getDataUsers().subscribe(data =>{
      this.users = data;
    });
  }

  obtAlbums(userId: number){
    this.service.getAlbumesUsers(userId).subscribe(data => {
      this.albumSelect = data;
      console.log(data)
    })
  }
}
