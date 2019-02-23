import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'page-nonlogin',
  templateUrl: 'nonlogin.html'
})
export class NonLoginUserPage {

  // Token variables (Retrieve from Rest API)
  zoomToken:string = "Your zoom token";
  zoomAccessToken:string = "Your zoom access token";
  userId:string = "Your user ID";

  // Meeting variables
  meetingNumber:string = null;
  meetingPassword:string = "";
  displayName:string = "Zoom Ionic";
  language:string = "en-US";


  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private zoomService:Zoom,
  ) {
  }

  /**
   * Join a meeting.
   */
  joinMeeting():any {
    console.log("Going to join meeting");
      // Prepare meeting option
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
      // Call join meeting method.
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
   * Start an existing meeting with ZAK.
   */
  startMeetingWithZAK():any {
    console.log("Going to start meeting with ZAK");
    // Prepare meeting option
    let options = {};
    // Call start meeting method
    this.zoomService.startMeetingWithZAK(this.meetingNumber, this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then((success)=>{
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
   * Change the in-meeting language.
   */
  setLanguage():any {
    this.zoomService.setLocale(this.language).then((success)=> {
      console.log(success);
      this.toastCtrl.create({
        message: success,
        duration: 3000,
        position: 'top'
      }).present();
    }).catch((error) => {
      console.log(error);
      this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }
}
