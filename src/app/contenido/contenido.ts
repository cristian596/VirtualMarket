import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  imports: [],
  templateUrl: './contenido.html',
  styleUrl: './contenido.css'
})
export class Contenido {
constructor(private router:Router){}

  seccionFrutas(){
    this.router.navigate(['/frutas'])
  }
  seccionArtesanal(){
    this.router.navigate(['/artesanal'])
  }
}
