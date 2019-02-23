import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginUserPage } from '../pages/login/login';
import { NonLoginUserPage } from '../pages/non-login/nonlogin';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Zoom } from '@ionic-native/zoom/ngx';


@NgModule({
  declarations: [
    MyApp,
    LoginUserPage,
    NonLoginUserPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginUserPage,
    NonLoginUserPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Zoom,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
