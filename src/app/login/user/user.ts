import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
 constructor(private router: Router){}

 iniciarSesion(){
  this.router.navigate(['/contenido']);
 }
  crearCuenta(){
  this.router.navigate(['/registro']);
 }
}