webpackJsonp([0],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__non_login_nonlogin__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__non_login_nonlogin__["a" /* NonLoginUserPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginUserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Non-Login User" tabIcon="videocam"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Login User" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_zoom_ngx__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginUserPage = /** @class */ (function () {
    function LoginUserPage(navCtrl, toastCtrl, zoomService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // Login variables
        this.userName = "";
        this.password = "";
        this.loggedIn = false;
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = "";
        this.displayName = "Zoom Ionic";
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
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    }
    /**
     * Log user in with Zoom username and password.
     */
    LoginUserPage.prototype.login = function () {
        var _this = this;
        console.log("Going to login");
        this.zoomService.login(this.userName, this.password).then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success.message,
                duration: 3000,
                position: 'top'
            }).present();
            _this.loggedIn = true;
            _this.userName = "";
            _this.password = "";
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error.message,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    /**
     * Log user out.
     */
    LoginUserPage.prototype.logout = function () {
        var _this = this;
        console.log("Going to logout");
        this.zoomService.logout().then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success.message,
                duration: 3000,
                position: 'top'
            }).present();
            _this.loggedIn = false;
        }).catch(function (error) {
            _this.toastCtrl.create({
                message: error.message,
                duration: 3000,
                position: 'top'
            }).present();
            console.log(error);
        });
    };
    /**
     * Join a meeting.
     */
    LoginUserPage.prototype.joinMeeting = function () {
        var _this = this;
        console.log("Going to join meeting");
        console.log(this.meetingNumber);
        var options = {
            "no_driving_mode": true,
            "no_invite": true,
            "no_meeting_end_message": true,
            "no_titlebar": false,
            "no_bottom_toolbar": false,
            "no_dial_in_via_phone": true,
            "no_dial_out_to_phone": true,
            "no_disconnect_audio": true,
            "no_share": true,
            "no_audio": true,
            "no_video": true,
            "no_meeting_error_message": true
        };
        this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, options)
            .then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    /**
     * Start an existing meeting.
     */
    LoginUserPage.prototype.startMeeting = function () {
        var _this = this;
        // Prepare meeting options
        var options = {};
        // Call start meeting method.
        this.zoomService.startMeeting(this.meetingNumber, options).then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    /**
     * Start an instant meeting.
     */
    LoginUserPage.prototype.startInstantMeeting = function () {
        var _this = this;
        // Prepare meeting options
        var options = {};
        // Call start instant meeting method.
        this.zoomService.startInstantMeeting(options).then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login User\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join meeting</li>\n        <li>start a scheduled meeting</li>\n        <li>start instant meeting</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Login\n    </ion-card-header>\n    <ion-card-content padding>\n      <p *ngIf="!loggedIn">Enter your Zoom username and password</p>\n      <ion-list *ngIf="!loggedIn">\n        <ion-item>\n          <ion-label stacked>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="userName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button *ngIf="!loggedIn" ion-button full (click)="login()">Login</button>\n      <button *ngIf="loggedIn" ion-button full (click)="logout()">Logout</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="loggedIn">\n    <ion-card-header>\n      Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>MeetingNo</ion-label>\n          <ion-input type="string" [(ngModel)]="meetingNumber"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Meeting Password (if any)</ion-label>\n          <ion-input type="password" [(ngModel)]="meetingPassword"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button full (click)="joinMeeting()">Join Meeting</button>\n      <button ion-button full (click)="startMeeting()">Start Meeting</button>\n      <div padding>\n        <button ion-button full (click)="startInstantMeeting()" outline>Start Instant Meeting</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!--<button ion-button full (click)="isLoggedIn()">Logged In?</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_zoom_ngx__["a" /* Zoom */]])
    ], LoginUserPage);
    return LoginUserPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonLoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_zoom_ngx__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NonLoginUserPage = /** @class */ (function () {
    function NonLoginUserPage(navCtrl, toastCtrl, zoomService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        // Token variables (Retrieve from Rest API)
        this.zoomToken = "Your zoom token";
        this.zoomAccessToken = "Your zoom access token";
        this.userId = "Your user ID";
        // Meeting variables
        this.meetingNumber = null;
        this.meetingPassword = "";
        this.displayName = "Zoom Ionic";
        this.language = "en-US";
    }
    /**
     * Join a meeting.
     */
    NonLoginUserPage.prototype.joinMeeting = function () {
        var _this = this;
        console.log("Going to join meeting");
        // Prepare meeting option
        var options = {
            "no_driving_mode": true,
            "no_invite": true,
            "no_meeting_end_message": true,
            "no_titlebar": false,
            "no_bottom_toolbar": false,
            "no_dial_in_via_phone": true,
            "no_dial_out_to_phone": true,
            "no_disconnect_audio": true,
            "no_share": true,
            "no_audio": true,
            "no_video": true,
            "no_meeting_error_message": true
        };
        // Call join meeting method.
        this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, options)
            .then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    /**
     * Start an existing meeting with ZAK.
     */
    NonLoginUserPage.prototype.startMeetingWithZAK = function () {
        var _this = this;
        console.log("Going to start meeting with ZAK");
        // Prepare meeting option
        var options = {};
        // Call start meeting method
        this.zoomService.startMeetingWithZAK(this.meetingNumber, this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
            _this.meetingNumber = null;
            _this.meetingPassword = null;
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    /**
     * Change the in-meeting language.
     */
    NonLoginUserPage.prototype.setLanguage = function () {
        var _this = this;
        this.zoomService.setLocale(this.language).then(function (success) {
            console.log(success);
            _this.toastCtrl.create({
                message: success,
                duration: 3000,
                position: 'top'
            }).present();
        }).catch(function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    NonLoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nonlogin',template:/*ion-inline-start:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/non-login/nonlogin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Non-Login User</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Non-login User can:\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li>join meeting</li>\n        <li>host a meeting with ZAK</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Join Meeting\n    </ion-card-header>\n    <ion-card-content padding>\n      <p>Enter a Zoom Meeting Number to join a meeting</p>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>MeetingNo</ion-label>\n          <ion-input type="text" [(ngModel)]="meetingNumber"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked="">Meeting Password (if any)</ion-label>\n          <ion-input type="password" [(ngModel)]="meetingPassword"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div>\n        <button ion-button full icon-start (click)="joinMeeting()">\n          <ion-icon name="videocam"></ion-icon>\n          Join Meeting\n        </button>\n      </div>\n      <div>\n        <button ion-button full (click)="startMeetingWithZAK()">Start Meeting with ZAK</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Change meeting language\n    </ion-card-header>\n    <ion-card-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Languages</ion-label>\n          <ion-select [(ngModel)]="language">\n            <ion-option value="en-US">English</ion-option>\n            <ion-option value="zh-CN">Simplified Chinese</ion-option>\n            <ion-option value="ja-JP">Japanese</ion-option>\n            <ion-option value="de-DE">German</ion-option>\n            <ion-option value="fr-FR">French</ion-option>\n            <ion-option value="zh-TW">Traditional Chinese</ion-option>\n            <ion-option value="es-419">Spanish</ion-option>\n            <ion-option value="ru-RU">Russian</ion-option>\n            <ion-option value="pt-PT">Portuguese</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <div>\n        <button ion-button full icon-start (click)="setLanguage()">\n          Change Language\n        </button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/pages/non-login/nonlogin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_zoom_ngx__["a" /* Zoom */]])
    ], NonLoginUserPage);
    return NonLoginUserPage;
}());

//# sourceMappingURL=nonlogin.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_non_login_nonlogin__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar_ngx__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen_ngx__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_zoom_ngx__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_non_login_nonlogin__["a" /* NonLoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_non_login_nonlogin__["a" /* NonLoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_zoom_ngx__["a" /* Zoom */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_zoom_ngx__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, toastCtrl, zoomService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.zoomService = zoomService;
        this.SDK_KEY = "QjJX5NPYQLOgGhWGV1yX9w";
        this.SDK_SECRET = "3vLROk7Z8iz6JpARgREtQinL7NtEOSjOYhYC";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            console.log("Platform ready");
            // Initialize Zoom SDK
            _this.zoomService.initialize(_this.SDK_KEY, _this.SDK_SECRET)
                .then(function (success) {
                console.log(success);
                _this.toastCtrl.create({
                    message: success,
                    duration: 3000,
                    position: 'top'
                }).present();
            })
                .catch(function (error) {
                console.log(error);
                _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                }).present();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/carsonchen/Desktop/ionic/testDemo/sample-app-ionic-master/src/app/app.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_zoom_ngx__["a" /* Zoom */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map