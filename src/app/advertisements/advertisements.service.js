angular
    .module('advertisements.advertisements')
    .service('exampleService', ['$http', function ($http) {
        const baseUrl = '/advertisements';
        this.getPublicAdvertisements = function () {
            return $http.get(baseUrl);
        }
    }]);