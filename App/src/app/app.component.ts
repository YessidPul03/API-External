import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  @Input() message: string = 'COMIENZA AHORA: Navega entre botones';
  isVisible: boolean = true;

  close() {
    this.isVisible = false;
  }
}
