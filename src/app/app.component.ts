/* All Imports */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Events } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  
  constructor(
    private events: Events,
    private toast: ToastController,
    private platform: Platform,
    private router: Router
  ) {
    /* For events generals */
    this.initApp();
  }


  private initApp(){
  }






  
}
