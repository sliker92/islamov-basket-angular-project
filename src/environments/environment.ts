// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAQ1TGTwACJa3mP_fcdL9gCyp2tV8eMa-g",
    authDomain: "islamov-basket-angular-project.firebaseapp.com",
    databaseURL: "https://islamov-basket-angular-project.firebaseio.com",
    projectId: "islamov-basket-angular-project",
    storageBucket: "islamov-basket-angular-project.appspot.com",
    messagingSenderId: "736445994535",
    appId: "1:736445994535:web:7e7004fa3884ec60db2002"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
