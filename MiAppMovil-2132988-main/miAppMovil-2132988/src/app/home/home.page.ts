import { Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ListaAlumnosComponent],
})
export class HomePage {
  constructor() { }

  titulo: string = 'Mi nueva página!';

}