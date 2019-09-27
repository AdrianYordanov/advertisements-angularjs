angular
    .module('advertisements.advertisements')
    .component('advertisements', {
        controller: function (exampleService) {
            let vm = this;
            exampleService.getPublicAdvertisements()
                .then(res => {
                    vm.advertisements = res.data.advertisements;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        templateUrl: 'app/advertisements/advertisements.template.html'
    })