import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frutas',
  imports: [],
  templateUrl: './frutas.html',
  styleUrl: './frutas.css'
})
export class Frutas {
constructor(private router:Router){}

seccionVerduras(){
  this.router.navigate(['/contenido'])
}
seccionArtesanal(){
  this.router.navigate(['/artesanal'])
}
}
