angular
    .module('ngTagNews')
    .config([
        '$stateProvider',
        '$httpProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'jwtInterceptorProvider', function(
            $stateProvider,
            $httpProvider,
            $locationProvider,
            $urlRouterProvider,
            jwtInterceptorProvider) {

            // jwtInterceptorProvider.tokenGetter = function(store) {
            //     return store.get('id_token');
            // };


            // $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('news', {
                    url: '/',
                    templateUrl: 'app/components/news/news.tpl.html',
                    controller: 'newsController',
                    controllerAs: 'newsCtrl'
                });

            // $httpProvider.interceptors.push('jwtInterceptor');
        }]);