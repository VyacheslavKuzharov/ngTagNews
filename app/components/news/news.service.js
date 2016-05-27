(function () {
    'use strict';
    angular.module('ngTagNews')
        .factory('newsService', newsService);

    newsService.$inject = ['$http', 'CONFIG'];
    
    function newsService($http, CONFIG){
        return {
            getNews: getNews,
            getTopNews: getTopNews,
            getArticleDetails: getArticleDetails 
        };
        
        function getNews(page) {
            return $http.get(CONFIG.APIHost + '/api/news', {
                params:{
                    page: page
                }
            })
        }

        function getTopNews() {
            return $http.get(CONFIG.APIHost + '/api/news/top_news')
        }
        
        function getArticleDetails(id) {
            return $http.get(CONFIG.APIHost + '/api/news/' + id)
        }
    }
    
})();