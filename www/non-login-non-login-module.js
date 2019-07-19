(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["non-login-non-login-module"],{

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _non_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-login.page */ "./src/app/non-login/non-login.page.ts");







var NonLoginModule = /** @class */ (function () {
    function NonLoginModule() {
    }
    NonLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _non_login_page__WEBPACK_IMPORTED_MODULE_6__["NonLoginPage"] }])
            ],
            declarations: [_non_login_page__WEBPACK_IMPORTED_MODULE_6__["NonLoginPage"]]
        })
    ], NonLoginModule);
    return NonLoginModule;
}());



/***/ }),

/***/ "./src/app/non-login/non-login.page.html":
/*!***********************************************!*\
  !*** ./src/app/non-login/non-login.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-tab-bar>\n    <ion-title>Non-Login User</ion-title>\n  </ion-tab-bar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Non-login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join a meeting</li>\n        <li>host a meeting with ZAK</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Join a Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <p>Enter a Zoom Meeting Number to join a meeting</p>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">MeetingNo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"meetingNumber\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Meeting Password (if any)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"meetingPassword\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div>\n        <ion-button expand=\"full\" (click)=\"joinMeeting()\">\n          <ion-icon slot=\"start\" name=\"videocam\"></ion-icon>\n          Join a Meeting\n        </ion-button>\n      </div>\n      <div>\n        <ion-button expand=\"full\" (click)=\"startMeetingWithZAK()\">Start a Meeting with ZAK</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\">\n      Change the meeting language\n    </ion-card-header>\n    <ion-card-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Languages</ion-label>\n          <ion-select [(ngModel)]=\"language\">\n            <ion-select-option value=\"en-US\">English</ion-select-option>\n            <ion-select-option value=\"zh-CN\">Simplified Chinese</ion-select-option>\n            <ion-select-option value=\"ja-JP\">Japanese</ion-select-option>\n            <ion-select-option value=\"de-DE\">German</ion-select-option>\n            <ion-select-option value=\"fr-FR\">French</ion-select-option>\n            <ion-select-option value=\"zh-TW\">Traditional Chinese</ion-select-option>\n            <ion-select-option value=\"es-419\">Spanish</ion-select-option>\n            <ion-select-option value=\"ru-RU\">Russian</ion-select-option>\n            <ion-select-option value=\"pt-PT\">Portuguese</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <div>\n        <ion-button expand=\"full\" (click)=\"setLanguage()\">\n          Change the Language\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/non-login/non-login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/non-login/non-login.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbi1sb2dpbi9ub24tbG9naW4ucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");




var NonLoginPage = /** @class */ (function () {
    function NonLoginPage(toastCtrl, zoomService) {
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // Token variables (Retrieve from Rest API)
        this.zoomToken = 'G8LEc_UCXvWwtOAdrdX4ChsSaiQkZuOlnbvBCXruBGI.BgUgcWxDUXJ1YWJhNTAyVkpmamZhQWFrbHI0VXhCVUQzdkpAYjAzMWQ0YzY2ZDM1YWEyNGQ1ZjkzZmU0MDUyYTJmNmJmMDMzOGM4NTY2MTNmY2M5M2UzZDEzODc4MGVkYTBkNgAMM0NCQXVvaVlTM3M9AAA';
        this.zoomAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJXcTZ2X0F3MFJDdXNEeF9FMm1lTmRnIiwiaXNzIjoid2ViIiwic3R5IjoxMDAsIndjZCI6ImF3MSIsImNsdCI6MCwic3RrIjoicmROcDRobTZ3UTFNNWNGaEQ1cncwWUNEakhvWDNYSEctUDI5Mm10QzgtZy5CZ1VnY1d4RFVYSjFZV0poTlRBeVZrcG1hbVpoUVdGcmJISTBWWGhDVlVRemRrcEFZakF6TVdRMFl6WTJaRE0xWVdFeU5HUTFaamt6Wm1VME1EVXlZVEptTm1KbU1ETXpPR000TlRZMk1UTm1ZMk01TTJVelpERXpPRGM0TUdWa1lUQmtOZ0FNTTBOQ1FYVnZhVmxUTTNNOUFBTmhkekUiLCJleHAiOjE1NjM0OTg5NzAsImlhdCI6MTU2MzQ5MTc3MCwiYWlkIjoiTUtEUldvcFRTUGlCeUR1cEY0THdvdyIsImNpZCI6IiJ9.MRUBtXCSrIZi-fUJHuaFjOx-0oWiXD4V1MSZUzVCDuI';
        this.userId = 'carson.chen@zoom.us';
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = '';
        this.displayName = 'Zoom Ionic';
        this.language = 'en-US';
    }
    NonLoginPage.prototype.presentToast = function (text) {
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
     * Join a meeting.
     */
    NonLoginPage.prototype.joinMeeting = function () {
        var _this = this;
        console.log('Going to join meeting');
        // Prepare meeting option
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
        // Call join meeting method.
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
     * Start an existing meeting with ZAK.
     */
    NonLoginPage.prototype.startMeetingWithZAK = function () {
        var _this = this;
        console.log('Going to start meeting with ZAK');
        // Prepare meeting option
        var options = {};
        // Call start meeting method
        this.zoomService.startMeetingWithZAK(this.meetingNumber, this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then(function (success) {
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
     * Change the in-meeting language.
     */
    NonLoginPage.prototype.setLanguage = function () {
        var _this = this;
        this.zoomService.setLocale(this.language).then(function (success) {
            console.log(success);
            _this.presentToast(success);
        }).catch(function (error) {
            console.log(error);
            _this.presentToast(error);
        });
    };
    NonLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-nonlogin',
            template: __webpack_require__(/*! ./non-login.page.html */ "./src/app/non-login/non-login.page.html"),
            styles: [__webpack_require__(/*! ./non-login.page.scss */ "./src/app/non-login/non-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_3__["Zoom"]])
    ], NonLoginPage);
    return NonLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=non-login-non-login-module.js.map