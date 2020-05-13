import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Zoom} from '@ionic-native/zoom/ngx';

@Component({
  selector: 'page-nonlogin',
  templateUrl: 'non-login.page.html',
  styleUrls: ['non-login.page.scss']
})
export class NonLoginPage {
  // [Warning] In production environment, please DO NOT hardcode your credentials. This is just for demo purpose.
  // Token variables (Retrieve from Rest API)
  zoomToken = '';
  zoomAccessToken = '';
  userId = '';

  // Meeting variables
  meetingNumber = null;
  meetingPassword = '';
  displayName = 'Zoom Ionic';
  language = 'en-US';

  constructor(
    private toastCtrl: ToastController,
      private zoomService: Zoom
  ) {}

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  /**
   * Join a meeting.
   */
  joinMeeting() {
    console.log('Going to join meeting');
    // Prepare meeting option
    const options = {
      custom_meeting_id: "Customized Title",
      no_share: false,
      no_audio: false,
      no_video: false,
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_dial_in_via_phone: false,
      no_dial_out_to_phone: false,
      no_disconnect_audio: true,
      no_meeting_error_message: true,
      no_unmute_confirm_dialog: true,
      no_webinar_register_dialog: false,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_button_video: false,
      no_button_audio: false,
      no_button_share: false,
      no_button_participants: false,
      no_button_more: false,
      no_text_password: true,
      no_text_meeting_id: false,
      no_button_leave: false
    };
    // Call join meeting method.
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
   * Start an existing meeting with ZAK.
   */
  startMeetingWithZAK() {
    console.log('Going to start meeting with ZAK');
    // Prepare meeting option
    const options = {};
    // Call start meeting method
    this.zoomService.startMeetingWithZAK(this.meetingNumber,
        this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then((success) => {
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
   * Change the in-meeting language.
   */
  setLanguage() {
    this.zoomService.setLocale(this.language).then((success) => {
      console.log(success);
      this.presentToast(success);
    }).catch((error) => {
      console.log(error);
      this.presentToast(error);
    });
  }

}
