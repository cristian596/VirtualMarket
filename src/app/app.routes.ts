import { Routes } from '@angular/router';
import { User } from './login/user/user';
import { Usuario } from './registro/usuario/usuario';
import { Inicio } from './inicio/inicio';
import { Contenido } from './contenido/contenido';
import { Frutas } from './frutas/frutas';
import { Artesanal } from './artesanal/artesanal';

export const routes: Routes = [
  { path: '',
     redirectTo: '/inicio',
      pathMatch: 'full' },
   { path: 'inicio',
     component: Inicio },
  { path: 'login',
     component: User },
  { path: 'registro',
     component: Usuario },
   { path: 'contenido',
     component: Contenido },
   { path: 'frutas',
     component: Frutas},
  {path:'artesanal',
    component:Artesanal}
];

