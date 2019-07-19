import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Zoom} from '@ionic-native/zoom/ngx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  // Login variables
  userName = '';
  password = '';
  loggedIn = false;

  // Meeting variables
  meetingNumber = null;
  meetingPassword = '';
  displayName = 'Zoom Ionic';

  constructor(
      private toastCtrl: ToastController,
      private zoomService: Zoom,
  ) {
    // Check whether the user is logged in.
    this.zoomService.isLoggedIn().then((success) => {
      console.log(success);
      if (success === true) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }).catch((error) => {
      console.log(error);
      this.presentToast(error);
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

  /**
   * Log user in with Zoom username and password.
   */
  login() {
    console.log('Going to login');
    this.zoomService.login(this.userName, this.password).then((success) => {
      console.log(success.message);
      this.presentToast(success.message);
      this.loggedIn = true;
      this.userName = '';
      this.password = '';
    }).catch((error) => {
      console.log(error);
      this.presentToast(error.message);
    });
  }

  /**
   * Log user out.
   */
  logout() {
    console.log('Going to logout');
    this.zoomService.logout().then((success) => {
      console.log(success.message);
      this.presentToast(success.message);
      this.loggedIn = false;
    }).catch((error) => {
      this.presentToast(error.message);
      console.log(error);
    });
  }

  /**
   * Join a meeting.
   */
  joinMeeting() {
    console.log('Going to join meeting');
    console.log(this.meetingNumber);
    const options = {
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_dial_in_via_phone: true,
      no_dial_out_to_phone: true,
      no_disconnect_audio: true,
      no_share: true,
      no_audio: true,
      no_video: true,
      no_meeting_error_message: true
    };
    this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, options)
        .then((success) => {
          console.log(success);
          this.presentToast(success);
          this.meetingNumber = null;
          this.meetingPassword = null;
        }).catch((error) => {
          console.log(error);
          this.presentToast(error);
    });
  }

  /**
   * Start an existing meeting.
   */
  startMeeting() {
    // Prepare meeting options
    const options = {};
    // Call start meeting method.
    this.zoomService.startMeeting(this.meetingNumber, options).then((success) => {
      console.log(success);
      this.presentToast(success);
      this.meetingNumber = null;
      this.meetingPassword = null;
    }).catch((error) => {
      console.log(error);
      this.presentToast(error);
    });
  }

  /**
   * Start an instant meeting.
   */
  startInstantMeeting() {
    // Prepare meeting options
    const options = {};
    // Call start instant meeting method.
    this.zoomService.startInstantMeeting(options).then((success) => {
      console.log(success);
      this.presentToast(success);
    }).catch((error) => {
      console.log(error);
      this.presentToast(error);
    });
  }
}
