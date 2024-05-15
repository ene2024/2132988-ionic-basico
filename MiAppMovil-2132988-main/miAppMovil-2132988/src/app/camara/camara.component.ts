import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Foto } from '../foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class CamaraComponent  implements OnInit {

  constructor(private FotoService: FotoServiceService ) { }

  ngOnInit() {}

  public fotos: Foto[] = this.FotoService.fotos;

  tomarFoto() {
    this.FotoService.addNewToGallery();
  }
}
