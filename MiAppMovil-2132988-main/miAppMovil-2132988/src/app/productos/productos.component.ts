import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  productos: any[] = [];

  obtenerProductos(): void{    
    this.consulta.getProductos()    
    .subscribe((resp: Object) => {      
      console.log(resp);      
      this.productos = resp as any[];  
    });
  }

  ngOnInit() {}

}
