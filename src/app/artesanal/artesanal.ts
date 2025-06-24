import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artesanal',
  imports: [],
  templateUrl: './artesanal.html',
  styleUrl: './artesanal.css'
})
export class Artesanal {
constructor(private router:Router){}

  seccionFrutas(){
    this.router.navigate(['/frutas'])
  }
  seccionVerduras(){
  this.router.navigate(['/contenido'])
}
}
