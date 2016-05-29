(function () {
    'use strict';

    angular.module('ngTagNews')
        .controller('newsController', newsController);

    newsController.$inject = ['$stateParams', '$location', 'newsService', 'authService'];

    function newsController($stateParams, $location, newsService, authService) {
        var vm = this;
        vm.pageChanged = pageChanged;
        
        vm.maxSize = 5;
        vm.currentPage = $stateParams.page || 1;
        vm.news;
        vm.topNews;


        newsService.getNews(vm.currentPage).then(function (response) {
            var newsAry = response.data;
            vm.totalItems = newsAry[newsAry.length - 1].news_count;
            newsAry.pop();

            vm.news = response.data;
        });
        
        newsService.getTopNews().then(function (response) {
            vm.topNews = response.data
        });

        function pageChanged() {
            $location.url('/news?page=' + vm.currentPage)
        }

    }
})();