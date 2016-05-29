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

            jwtInterceptorProvider.tokenGetter = function(store) {
                return store.get('token');
            };


            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('news', {
                    url: '/',
                    templateUrl: 'app/components/news/news.tpl.html',
                    controller: 'newsController',
                    controllerAs: 'newsCtrl'
                })
                .state('paging', {
                    url: '/news?page',
                    templateUrl: 'app/components/news/news.tpl.html',
                    controller: 'newsController',
                    controllerAs: 'newsCtrl'
                })
                .state('articleDetails', {
                    url: '/news/:id',
                    templateUrl: 'app/components/news/article-details/article-details.tpl.html',
                    controller: 'articleDitailsController',
                    controllerAs: 'detailsCtrl'
                });

            $httpProvider.interceptors.push('jwtInterceptor');
        }]);