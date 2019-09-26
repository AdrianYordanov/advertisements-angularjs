'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('advertisements', [
    'ngRoute',
    'advertisements.header',
    'advertisements.footer',
    'advertisements.home'
  ]);