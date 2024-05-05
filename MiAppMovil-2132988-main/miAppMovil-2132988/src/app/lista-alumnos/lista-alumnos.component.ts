import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule, NgForm } from '@angular/forms';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ListaAlumnosComponent {

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  alumnos: alumno[] = [];

  agregarAlumno() {
    if (this.alumno.nombre.trim()){
      this.alumnos.push({...this.alumno}); //agregar info al arreglo
      console.log(this.alumno.nombre, this.alumno.presente); //comprobar en consola
      
      this.alumno.nombre = ' '; //limpiar el campo de nombre
      this.alumno.presente = false; //limpiar el checkbox
    }
  }

}