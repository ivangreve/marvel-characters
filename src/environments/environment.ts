// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  api: {
    baseUrl: 'https://gateway.marvel.com/v1/public',
    publicKey: '28e7a602eb43aa65ce252fbe752ff8c5',
    privateKey: 'ada277975cca0d8e062f21a9c431e17d3f4d7cb3'
  },
  production: true
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
