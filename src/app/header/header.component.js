angular
    .module('advertisements.header').
    component('advertisements.header', {
        templateUrl: 'app/header/header.template.html',
        controller: ['$location', function ($location) {
            this.welcomeMessage = "Welcome, user!";
            this.welcomeLink = "/advertisements";
            this.userToken = "authenticated value";
            this.links = [
                { href: "/", title: "Home", needAuth: false },
                { href: "/contacts", title: "Contacts", needAuth: false },
                { href: "/advertisements", title: "Advertisements", needAuth: false },
                { href: "/login", title: "Login", needAuth: false },
                { href: "/register", title: "Register", needAuth: false },
                { href: "/advertisements/my", title: "My Advertisements", needAuth: true },
                { href: "/advertisements/create", title: "Create Advertisement", needAuth: true }
            ];

            this.links = this.links.filter(link => 
                !link.needAuth ||
                (link.needAuth && Boolean(this.userToken)));

            this.isLinkActive = function (path) {
                return $location.path() === path;
            }
        }]
    })