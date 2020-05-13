(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Login User\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join a meeting</li>\n        <li>start a scheduled meeting</li>\n        <li>start an instant meeting</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Login\n    </ion-card-header>\n    <ion-card-content padding>\n      <p *ngIf=\"!loggedIn\">Enter your Zoom username and password</p>\n      <ion-list *ngIf=\"!loggedIn\">\n        <ion-item>\n          <ion-label position=\"stacked\">Username</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button *ngIf=\"!loggedIn\" expand=\"full\" (click)=\"login()\">Login</ion-button>\n      <ion-button *ngIf=\"loggedIn\" expand=\"full\" (click)=\"logout()\">Logout</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"loggedIn\">\n    <ion-card-header>\n      Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <div padding>\n        <ion-button expand=\"full\" fill=\"outline\" (click)=\"startInstantMeeting()\">Start an Instant Meeting</ion-button>\n      </div>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Number</ion-label>\n          <ion-input type=\"string\" [(ngModel)]=\"meetingNumber\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Password (if any)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"meetingPassword\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button expand=\"full\" (click)=\"joinMeeting()\">Join a Meeting</ion-button>\n      <ion-button expand=\"full\" (click)=\"startMeeting()\">Start a Meeting</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/__ivy_ngcc__/ngx/index.js");




let LoginPage = class LoginPage {
    constructor(toastCtrl, zoomService) {
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // [Warning] In production environment, please DO NOT hardcode your credentials. This is just for demo purpose.
        // Login variables
        this.userName = '';
        this.password = '';
        this.loggedIn = false;
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = '';
        this.displayName = 'Zoom Ionic';
        // Check whether the user is logged in.
        this.zoomService.isLoggedIn().then((success) => {
            console.log(success);
            if (success === true) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        }).catch((error) => {
            console.log(error);
            this.presentToast(error);
        });
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
            no_meeting_error_message: true,
            custom_meeting_id: "Customized Title",
            meeting_views_options: 64,
            no_unmute_confirm_dialog: true,
            no_webinar_register_dialog: false
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
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map