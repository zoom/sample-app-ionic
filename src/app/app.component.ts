import { Component } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { TabsPage } from '../pages/tabs/tabs';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {
  SDK_KEY:string = "Your SDK Key here";
  SDK_SECRET:string = "Your SDK Secret here";
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private toastCtrl: ToastController,
    private zoomService:Zoom,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      console.log("Platform ready");

      // Initialize Zoom SDK
      this.zoomService.initialize(this.SDK_KEY,this.SDK_SECRET)
        .then((success) => {
          console.log(success);
          this.toastCtrl.create({
            message: success,
            duration: 3000,
            position: 'top'
          }).present();
        })
        .catch((error)=>{
          console.log(error);
          this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          }).present();
        })
    });
  }
}
