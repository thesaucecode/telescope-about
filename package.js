Package.describe({
  summary: 'Telescope about page – describe your community',
  version: '0.1.0',
  name: 'telescope-about'
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss'              // SCSS compilation package
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);



  // ---------------------------------- 2. Files to include ----------------------------------

 // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/hooks.js',
    'lib/router.js'
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/about_template.html',
    'lib/client/templates/about_template.js',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

});