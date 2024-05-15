import { Routes } from '@angular/router';
import { CamaraComponent } from './camara/camara.component';

export const routes: Routes = [
  /*{
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },*/
  {
    path: '',
    component: CamaraComponent,
  },
  {
    path: 'camara',
    component: CamaraComponent,
  }
];
