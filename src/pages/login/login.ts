import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginUserPage {
  // Login variables
  userName:string = "";
  password:string = "";
  loggedIn:boolean = false;

  // Meeting variables
  meetingNumber:string = null;
  meetingPassword:string = "";
  displayName:string = "Zoom Ionic";


  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private zoomService:Zoom,
  ) {
    // Check whether the user is logged in.
    this.zoomService.isLoggedIn().then((success)=>{
      console.log(success);
      if (success === true) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }).catch((error)=>{
      console.log(error);
      this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      }).present();
    })
  }

  /**
   * Log user in with Zoom username and password.
   */
  login():any {
    console.log("Going to login");
    this.zoomService.login(this.userName, this.password).then((success)=>{
      console.log(success);
      this.toastCtrl.create({
        message: success.message,
        duration: 3000,
        position: 'top'
      }).present();
      this.loggedIn = true;
      this.userName = "";
      this.password = "";
    }).catch((error)=>{
      console.log(error);
      this.toastCtrl.create({
        message: error.message,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }

  /**
   * Log user out.
   */
  logout():any {
    console.log("Going to logout");
    this.zoomService.logout().then((success)=>{
      console.log(success);
      this.toastCtrl.create({
        message: success.message,
        duration: 3000,
        position: 'top'
      }).present();
      this.loggedIn = false;
    }).catch((error)=>{
      this.toastCtrl.create({
        message: error.message,
        duration: 3000,
        position: 'top'
      }).present();
      console.log(error);
    });
  }

  /**
   * Join a meeting.
   */
  joinMeeting():any {
    console.log("Going to join meeting");
    console.log(this.meetingNumber);
    let options = {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
    };
    this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, options)
      .then((success)=>{
        console.log(success);
        this.toastCtrl.create({
          message: success,
          duration: 3000,
          position: 'top'
        }).present();
        this.meetingNumber = null;
        this.meetingPassword = null;
      }).catch((error)=>{
      console.log(error);
      this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }

  /**
   * Start an existing meeting.
   */
  startMeeting():any {
      // Prepare meeting options
      let options = {};
      // Call start meeting method.
      this.zoomService.startMeeting(this.meetingNumber, options).then((success)=>{
        console.log(success);
        this.toastCtrl.create({
          message: success,
          duration: 3000,
          position: 'top'
        }).present();
        this.meetingNumber = null;
        this.meetingPassword = null;
      }).catch((error)=>{
        console.log(error);
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top'
        }).present();
      })
  }

  /**
   * Start an instant meeting.
   */
  startInstantMeeting():any {
    // Prepare meeting options
    let options = {};
    // Call start instant meeting method.
    this.zoomService.startInstantMeeting(options).then((success)=>{
      console.log(success);
      this.toastCtrl.create({
        message: success,
        duration: 3000,
        position: 'top'
      }).present();
    }).catch((error)=>{
      console.log(error);
      this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }
}
