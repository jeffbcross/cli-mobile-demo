/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {}

/** User packages configuration. */
const packages: any = {}

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/app-shell',
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular2-material/core',
  '@angular2-material/toolbar',
  '@angular/router-deprecated',
  '@angular/upgrade',
  '@angular/testing',
  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+snaps',
  'app/+snaps/+post',
  'app/+snaps/+list',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    '@angular2-material': 'vendor/@angular2-material',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
  },
  packages: Object.assign({}, cliSystemConfigPackages, {
        '@angular2-material/toolbar': {
            defaultExtension: 'js',
            main: 'toolbar.js'
        },
        'angular2-in-memory-web-api': {
          defaultExtension: 'js'
        }
  })
});

// Apply the user's configuration.
System.config({ map, packages });
