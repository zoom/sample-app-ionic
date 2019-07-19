import { Component } from '@angular/core';

import {Platform, ToastController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Zoom} from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  SDK_KEY = '';
  SDK_SECRET = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private zoomService: Zoom
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log('Platform ready');

      this.zoomService.initialize(this.SDK_KEY, this.SDK_SECRET)
          .then((success) => {
            console.log(success);
            this.presentToast(success);
          })
          .catch((error) => {
            console.log(error);
            this.presentToast(error);
          });
    });
  }
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
