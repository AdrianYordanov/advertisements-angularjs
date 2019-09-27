angular
    .module('advertisements.advertisement')
    .component('advertisement', {
        bindings: {
            advertisement: '<'
        },
        controller: function () {
            var ctrl = this;
            ctrl.$onInit = function(){
                console.log(ctrl.advertisement);
            }
        },
        templateUrl: 'app/advertisement/advertisement.template.html'
    });