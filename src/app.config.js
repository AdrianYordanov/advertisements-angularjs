angular
    .module('advertisements')
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
      // $httpProvider.defaults.headers = {
      //   'Content-Type': 'application/json',
      //   'Authentication': 'Bearer token',
      //   'Access-Control-Allow-Headers': 'Content-Type',
      //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      //   'Access-Control-Allow-Origin': '*',
      // }
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/', {
          template: '<home></home>',
        })
        .when('/contacts', {
          template: '<contacts></contacts>',
        })
        .when('/advertisements', {
          template: '<advertisements></advertisements>',
        })
        .when('/login', {
          template: '<h1>Login</h1>',
        })
        .when('/register', {
          template: '<h1>Register</h1>',
        })
        .when('/advertisements/my', {
          template: '<h1>My Advertisements</h1>',
        })
        .when('/advertisements/create', {
          template: '<h1>Create Advertisement</h1>',
        })
        .otherwise({
          template: 'Unmatching route',
        })
    }]);