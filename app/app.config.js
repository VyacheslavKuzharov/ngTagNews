angular
    .module('ngTagNews', [
        'ui.router',
        'ngMessages',
        'ngAnimate',
        'angular-storage',
        'angular-jwt',
        'ui.bootstrap',
        'ngTouch'
    ])
    .constant('CONFIG',
        {
            APIHost: 'http://localhost:3000'
        });