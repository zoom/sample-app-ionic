(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["non-login-non-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/non-login/non-login.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/non-login/non-login.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Non-Login User\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Non-login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join a meeting</li>\n        <li>host a meeting with ZAK</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Join a Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <p>Enter a Zoom Meeting Number to join a meeting</p>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">MeetingNo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"meetingNumber\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Password (if any)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"meetingPassword\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div>\n        <ion-button expand=\"full\" (click)=\"joinMeeting()\">\n          <ion-icon slot=\"start\" name=\"videocam\"></ion-icon>\n          Join a Meeting\n        </ion-button>\n      </div>\n      <div>\n        <ion-button expand=\"full\" (click)=\"startMeetingWithZAK()\">Start a Meeting with ZAK</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Change the meeting language\n    </ion-card-header>\n    <ion-card-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Languages</ion-label>\n          <ion-select [(ngModel)]=\"language\">\n            <ion-select-option value=\"en-US\">English</ion-select-option>\n            <ion-select-option value=\"zh-CN\">Simplified Chinese</ion-select-option>\n            <ion-select-option value=\"ja-JP\">Japanese</ion-select-option>\n            <ion-select-option value=\"de-DE\">German</ion-select-option>\n            <ion-select-option value=\"fr-FR\">French</ion-select-option>\n            <ion-select-option value=\"zh-TW\">Traditional Chinese</ion-select-option>\n            <ion-select-option value=\"es-419\">Spanish</ion-select-option>\n            <ion-select-option value=\"ru-RU\">Russian</ion-select-option>\n            <ion-select-option value=\"pt-PT\">Portuguese</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <div>\n        <ion-button expand=\"full\" (click)=\"setLanguage()\">\n          Change the Language\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/non-login/non-login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/non-login/non-login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NonLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonLoginRoutingModule", function() { return NonLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _non_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./non-login.page */ "./src/app/non-login/non-login.page.ts");




const routes = [
    {
        path: '',
        component: _non_login_page__WEBPACK_IMPORTED_MODULE_3__["NonLoginPage"],
    }
];
let NonLoginRoutingModule = class NonLoginRoutingModule {
};
NonLoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NonLoginRoutingModule);



/***/ }),

/***/ "./src/app/non-login/non-login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/non-login/non-login.module.ts ***!
  \***********************************************/
/*! exports provided: NonLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonLoginModule", function() { return NonLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _non_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non-login.page */ "./src/app/non-login/non-login.page.ts");
/* harmony import */ var _non_login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-login-routing.module */ "./src/app/non-login/non-login-routing.module.ts");







let NonLoginModule = class NonLoginModule {
};
NonLoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _non_login_routing_module__WEBPACK_IMPORTED_MODULE_6__["NonLoginRoutingModule"]
        ],
        declarations: [_non_login_page__WEBPACK_IMPORTED_MODULE_5__["NonLoginPage"]]
    })
], NonLoginModule);



/***/ }),

/***/ "./src/app/non-login/non-login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/non-login/non-login.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1sb2dpbi9ub24tbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/non-login/non-login.page.ts":
/*!*********************************************!*\
  !*** ./src/app/non-login/non-login.page.ts ***!
  \*********************************************/
/*! exports provided: NonLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonLoginPage", function() { return NonLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/__ivy_ngcc__/ngx/index.js");




let NonLoginPage = class NonLoginPage {
    constructor(toastCtrl, zoomService) {
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // [Warning] In production environment, please DO NOT hardcode your credentials. This is just for demo purpose.
        // Token variables (Retrieve from Rest API)
        this.zoomToken = '';
        this.zoomAccessToken = '';
        this.userId = '';
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = '';
        this.displayName = 'Zoom Ionic';
        this.language = 'en-US';
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
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
        this.zoomService.startMeetingWithZAK(this.meetingNumber, this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then((success) => {
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
};
NonLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"] }
];
NonLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-nonlogin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./non-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/non-login/non-login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./non-login.page.scss */ "./src/app/non-login/non-login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"]])
], NonLoginPage);



/***/ })

}]);
//# sourceMappingURL=non-login-non-login-module-es2015.js.map