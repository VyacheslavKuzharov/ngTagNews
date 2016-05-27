(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .directive('newsArticle', newsArticle);

    function newsArticle() {
        return {
            templateUrl: 'app/components/news/article/news-article.tpl.html',
            scope:{
                news: '='
            },
            controller: articleController,
            controllerAS: 'articleCtrl'
        };

        function articleController() {
            var vm = this;


        }

    }
})();