import { Component} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  constructor() {}
}