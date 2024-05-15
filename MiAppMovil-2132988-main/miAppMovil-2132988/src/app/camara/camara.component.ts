import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CamaraComponent  implements OnInit {

  constructor(private FotoService: FotoServiceService ) { }

  ngOnInit() {}

  tomarFoto() {
    this.FotoService.addNewToGallery();
  }
}
