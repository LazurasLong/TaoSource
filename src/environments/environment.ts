// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDB3xLDqyKQop-skU8xJ3f1i-CTjcpTvs',
    authDomain: 'world-cleaner.firebaseapp.com',
    databaseURL: 'https://world-cleaner.firebaseio.com',
    projectId: 'world-cleaner',
    storageBucket: 'world-cleaner.appspot.com',
    messagingSenderId: '727424324756'
  }
};
