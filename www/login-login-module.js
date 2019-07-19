(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"] }])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Login User\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join a meeting</li>\n        <li>start a scheduled meeting</li>\n        <li>start an instant meeting</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Login\n    </ion-card-header>\n    <ion-card-content padding>\n      <p *ngIf=\"!loggedIn\">Enter your Zoom username and password</p>\n      <ion-list *ngIf=\"!loggedIn\">\n        <ion-item>\n          <ion-label position=\"stacked\">Username</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button *ngIf=\"!loggedIn\" expand=\"full\" (click)=\"login()\">Login</ion-button>\n      <ion-button *ngIf=\"loggedIn\" expand=\"full\" (click)=\"logout()\">Logout</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"loggedIn\">\n    <ion-card-header>\n      Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Number</ion-label>\n          <ion-input type=\"string\" [(ngModel)]=\"meetingNumber\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Password (if any)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"meetingPassword\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button expand=\"full\" (click)=\"joinMeeting()\">Join a Meeting</ion-button>\n      <ion-button expand=\"full\" (click)=\"startMeeting()\">Start a Meeting</ion-button>\n      <div padding>\n        <ion-button expand=\"full\" fill=\"outline\" (click)=\"startInstantMeeting()\">Start an Instant Meeting</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!--<button ion-button full (click)=\"isLoggedIn()\">Logged In?</button>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, zoomService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // Login variables
        this.userName = '';
        this.password = '';
        this.loggedIn = false;
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = '';
        this.displayName = 'Zoom Ionic';
        // Check whether the user is logged in.
        this.zoomService.isLoggedIn().then(function (success) {
            console.log(success);
            if (success === true) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error);
        });
    }
    LoginPage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Log user in with Zoom username and password.
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('Going to login');
        this.zoomService.login(this.userName, this.password).then(function (success) {
            console.log(success.message);
            _this.presentToast(success.message);
            _this.loggedIn = true;
            _this.userName = '';
            _this.password = '';
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error.message);
        });
    };
    /**
     * Log user out.
     */
    LoginPage.prototype.logout = function () {
        var _this = this;
        console.log('Going to logout');
        this.zoomService.logout().then(function (success) {
            console.log(success.message);
            _this.presentToast(success.message);
            _this.loggedIn = false;
        }).catch(function (error) {
            _this.presentToast(error.message);
            console.log(error);
        });
    };
    /**
     * Join a meeting.
     */
    LoginPage.prototype.joinMeeting = function () {
        var _this = this;
        console.log('Going to join meeting');
        console.log(this.meetingNumber);
        var options = {
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
            .then(function (success) {
            console.log(success);
            _this.presentToast(success);
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error);
        });
    };
    /**
     * Start an existing meeting.
     */
    LoginPage.prototype.startMeeting = function () {
        var _this = this;
        // Prepare meeting options
        var options = {};
        // Call start meeting method.
        this.zoomService.startMeeting(this.meetingNumber, options).then(function (success) {
            console.log(success);
            _this.presentToast(success);
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error);
        });
    };
    /**
     * Start an instant meeting.
     */
    LoginPage.prototype.startInstantMeeting = function () {
        var _this = this;
        // Prepare meeting options
        var options = {};
        // Call start instant meeting method.
        this.zoomService.startInstantMeeting(options).then(function (success) {
            console.log(success);
            _this.presentToast(success);
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map