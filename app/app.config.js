angular
    .module('ngTagNews', [
        'ui.router',
        'ngMessages',
        'ngAnimate',
        'angular-storage',
        'angular-jwt',
        'ui.bootstrap'
    ])
    .constant('CONFIG',
        {
            APIHost: 'http://localhost:3000'
        });