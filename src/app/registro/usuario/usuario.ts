import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-usuario',
  imports: [MatButtonModule,MatInputModule,MatRadioModule,MatCheckboxModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {

}
