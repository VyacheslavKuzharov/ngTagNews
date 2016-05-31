(function () {
    'use strict';
    angular.module('ngTagNews')
        .factory('commentsService', commentsService);

    commentsService.$inject = ['$http', 'CONFIG'];

    function commentsService($http, CONFIG){
        return {
            getArticleComments: getArticleComments,
            addComment: addComment
        };

        function getArticleComments(articleId) {
            return $http.get(CONFIG.APIHost + '/api/news/' + articleId + '/comments');

        }

        function addComment(text, news_id, user_id) {
            return $http.post(CONFIG.APIHost + '/api/comments', {
                text: text,
                news_id: news_id,
                user_id: user_id
            });
        }

    }

})();