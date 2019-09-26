angular.
    module('advertisements').
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        template: '<home></home>',
      })
      .when('/contacts', {
        template: '<h1>Contacts</h1>',
      })
      .when('/advertisements', {
        template: '<h1>Advertisements</h1>',
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