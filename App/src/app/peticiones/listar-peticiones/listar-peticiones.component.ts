import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { peticionModel } from '../../shared/bdpeticion.model';
import { DbpeticionService } from '../../shared/dbpeticion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-peticiones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-peticiones.component.html',
  styleUrl: './listar-peticiones.component.scss'
})
export class ListarPeticionesComponent implements OnInit{

  peticiones: Observable<peticionModel[]> | undefined;

  constructor(private peticionService: DbpeticionService) {}

  ngOnInit(): void {
    this.peticiones = this.peticionService.listarPeticiones();
  }
}
