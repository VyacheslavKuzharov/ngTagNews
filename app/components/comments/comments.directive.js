(function () {
    'use strict';
    
    angular
        .module('ngTagNews')
        .directive('comments', comments);
    
    function comments() {
        return {
            templateUrl: 'app/components/comments/comments.tpl.html',
            controller: commentsController,
            controllerAs: 'commentsCtrl'
        };
        
        function commentsController($stateParams, commentsService, authService) {
            var vm = this;
            vm.saveComment = saveComment;
            vm.comments

            commentsService.getArticleComments($stateParams.id).then(function (response) {
                vm.comments = response.data
            });

            function saveComment(comment) {

                commentsService.addComment(comment.commentText, $stateParams.id, authService.currentUser().id).then(function (response) {
                    vm.comments.push(response.data)
                    comment.commentText = '';
                })
            }
        }
    }
})();