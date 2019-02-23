# Zoom Ionic SDK sample app

**Note: This is a community project initiated by Zoom. Zoom does not actively enhance the interfaces in the Ionic plugin. If you would like to contribute, please contact us. Thanks! :)**

> Our brand new [Zoom Developer Community Forum](https://devforum.zoom.us/) is now online!!! Check it out! We are here to help! :D

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
    * Android 4.0 (API Level 14) or later.
  * iOS
    * iPhone or iPad
* **npm@6.4+**
* **ionic@3**
* **ionic native@5.20+**

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
ionic cordova platform add android
ionic cordova platform add ios
```
2. run the following to install the plugin:
```
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

## Documentation

Please visit [[https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic](https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic)] for details of each features and functions.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/zoom/zoom-sdk-ionic/tags).

## Change log

Please refer to our [CHANGELOG](CHANGELOG.md) for all changes.

## Support

For any issues regarding our SDK, please visit our new Community Support Forum at https://devforum.zoom.us/.

## License

Please refer to [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* :star: If you like our SDK, please give us a "Star". Your support is what keeps us moving forward and delivering happiness to you! Thanks a million! :smiley:
* If you need any support or assistance, we are here to help you: [Zoom Developer Community Forum](https://devforum.zoom.us/);

---
Copyright ©2019 Zoom Video Communications, Inc. All rights reserved.
