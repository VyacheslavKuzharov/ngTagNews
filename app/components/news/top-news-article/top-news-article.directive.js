(function () {
    'use strict';
    
    angular
        .module('ngTagNews')
        .directive('topNewsArticle', topNewsArticle);
    
    function topNewsArticle() {
        return {
            templateUrl: 'app/components/news/top-news-article/top-news-article.tpl.html',
            scope: {
                topNews: '='
            },
            controller: topArticleController,
            controllerAs: 'topCtrl'
        };
        
        function topArticleController() {
            var vm = this;
        }
    }
})();