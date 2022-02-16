# Zoom Ionic SDK sample app

**Note: This is a community project initiated by Zoom. Zoom does not actively enhance the interfaces in the Ionic plugin. If you would like to contribute, please contact us. Thanks! :)**

<div align="center">
<img src="https://camo.githubusercontent.com/f819328f236e10c1a0bb7a157f34c2e141150285adbd38757ffc3af4ec824158/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f757365722d636f6e74656e742e73746f706c696768742e696f2f383938372f31353431303133303633363838" width="400px" max-height="400px" style="margin:auto;"/>
</div>

## :rotating_light: Announcement :rotating_light:
To align with Zoom’s [recent announcement](https://blog.zoom.us/wordpress/2020/04/22/zoom-hits-milestone-on-90-day-security-plan-releases-zoom-5-0/) pertaining to our security initiative, Zoom Client SDKs have added **AES 256-bit GCM encryption** support, which provides more protection for meeting data and greater resistance to tampering. **The system-wide account enablement of AES 256-bit GCM encryption will take place on June 01, 2020.** You are **strongly recommended** to start the required upgrade to this latest version 4.6.21666.0512 at your earliest convenience. Please note that any Client SDK versions below 4.6.21666.0512 will **no longer be operational** from June 01.

> If you would like to test the latest SDK with AES 256-bit GCM encryption meeting before 05/30, you may:
> 1. Download the latest version of Zoom client: https://zoom.us/download
> 2. Visit https://zoom.us/testgcm and launch a GCM enabled meeting with your Zoom client, you will see a Green Shield icon that indicates the GCM encryption is enabled
> 3. Use SDK to join this meeting

## Full Documentation && Community Support
You can find the full Zoom Ionic SDK documentation and the community support forum here:
<div align="center">
   <a target="_blank" href="https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic" style="text-decoration:none">
   <img src="https://camo.githubusercontent.com/56cdfebcb6fd07b4f263a414bcdc075fa7cd6c6905057811bd0ca3235414b263/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f446f632d627574746f6e2e706e67" width="350px" max-height="350px" style="margin:1vh 1vw;"/>
   </a>
   <a target="_blank" href="https://devforum.zoom.us/c/mobile-sdk" style="text-decoration:none">
   <img src="https://camo.githubusercontent.com/d785750e179aaf681e09e1b8dc8c26e86115255bce201fc8871e82a7eb4c7e5a/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f466f72756d2d627574746f6e2e706e67" width="350px" max-height="350px" style="margin:1vh 1vw;"/>
   </a>
</div>

## Disclaimer

**Please be aware that all hard-coded variables and constants shown in the documentation and in the demo, such as Zoom Token, Zoom Access, Token, etc., are ONLY FOR DEMO AND TESTING PURPOSES. We STRONGLY DISCOURAGE the way of HARDCODING any Zoom Credentials (username, password, API Keys & secrets, SDK keys & secrets, etc.) or any Personal Identifiable Information (PII) inside your application. WE DON’T MAKE ANY COMMITMENTS ABOUT ANY LOSS CAUSED BY HARD-CODING CREDENTIALS OR SENSITIVE INFORMATION INSIDE YOUR APP WHEN DEVELOPING WITH OUR SDK**.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
* For detailed instructions, please refer to our documentation website: [[https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic](https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic)];
* If you need support or assistance, please visit our [Zoom Developer Community Forum](https://devforum.zoom.us/);

### Prerequisites

Before you try out our SDK, you would need the following to get started:

* **A Zoom Account**: If you do not have one, you can sign up at [https://zoom.us/signup](https://zoom.us/signup).
  * Once you have your Zoom Account, sign up for a 60-days free trial at [https://marketplace.zoom.us/](https://marketplace.zoom.us/)
  * **A mobile device**
    * Android
      * Android 5.0 (API Level 21) or later.
      * CPU: armeabi-v7a, x86, armeabi, arm64-v8a, x86_64
      * **compileSdkVersion**: 29+
      * **buildToolsVersion**: 29+
      * **minSdkVersion**: 21
      * **Required dependencies**
      ```
      implementation 'androidx.multidex:multidex:2.0.0'
      implementation 'androidx.recyclerview:recyclerview:1.0.0'
      implementation 'androidx.appcompat:appcompat:1.0.0'
      implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
      implementation 'com.google.android.material:material:1.0.0-rc01'
      ```
    * iOS
      * iPhone or iPad
      * **npm@6.13.4+**
      * **ionic-cli@6.9.0+**
      * **ionic/angular@5.0.0+**
      * **ionic-native/core@5.25.0+**
      * **ionic-native/zoom@5.25.0+**

    If you are developing on Android, you will need to install the latest version of cordova-android(Since the current released version of cordova-android does not support Android SDK API Level 29, please install the latest version from their Github repo, which supports Android SDK API Level 29)
    ```
    ionic cordova platform add https://github.com/apache/cordova-android.git
    ```

    and install the following 2 plugins before you can use the Ionic SDK:
    ```
    ionic cordova plugin add cordova-plugin-androidx
    ionic cordova plugin add cordova-plugin-androidx-adapter
    ```


### Installing

Clone or download a copy of our demo app from GitHub. After you unzipped the file, you should have the following folders:

```
.
├── README.md
├── config.xml
├── ionic.config.json
├── package-lock.json
├── package.json
├── resources
├── src
├── tsconfig.json
├── tslint.json
└── www
```
In your Ionic application directory:
1. Install the dependencies and platforms:
```
npm install
npm install @ionic-native/zoom #(Optional) if not successfully installed automatically with package.json
ionic cordova platform add https://github.com/apache/cordova-android.git
ionic cordova platform add ios
```
2. run the following to install the plugin:
```
ionic cordova plugin add cordova-plugin-androidx
ionic cordova plugin add cordova-plugin-androidx-adapter
ionic cordova plugin add cordova.plugin.zoom
```
3. Run the application:
```
ionic cordova run android
ionic cordova run ios
```

### Build Note
In order to use the camera and microphone on iOS, please add the following in your config.xml file. Otherwise, your app will not be able to initialize a meeting.
```
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Need camera for video conferencing</string>
</edit-config>
<edit-config file="*-Info.plist" mode="merge" target="NSMicrophoneUsageDescription">
    <string>Need microphone for video conferencing</string>
</edit-config>
```

## Simulator Support
By default, this plugin only support running on real devices. If you would like to develop and test with Android or iOS simulators, please visit [https://github.com/zoom/zoom-sdk-ionic](https://github.com/zoom/zoom-sdk-ionic) for more details.


## Documentation

Please visit [[https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic](https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic)] for details of each features and functions.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/zoom/zoom-sdk-ionic/tags).

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.

## License

Please refer to [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* :star: If you like our SDK, please give us a "Star". Your support is what keeps us moving forward and delivering happiness to you! Thanks a million! :smiley:
* If you need any support or assistance, we are here to help you: [Zoom Developer Community Forum](https://devforum.zoom.us/);

---
Copyright ©2020 Zoom Video Communications, Inc. All rights reserved.
