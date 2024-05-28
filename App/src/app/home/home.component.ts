import { Component, OnInit } from '@angular/core';
import { ApimasalcanceService } from '../service/apimasalcance.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  post: any[] = [];  
  data: any[] = [];

  constructor(private service: ApimasalcanceService){}

  ngOnInit():void{
    this.obtData();
  }

  obtData(){
    this.service.getDataUsers().subscribe(data => {
      this.data = data;
      console.log(data)
    })
  }

  obtPost(id: string){
    this.service.getPostUsers(id).subscribe((data: any) => {
      console.log(data)
      this.post=data})
  }

}
