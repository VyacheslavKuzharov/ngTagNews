(function () {
    'use strict';

    angular.module('ngTagNews')
        .controller('articleDitailsController', articleDitailsController);

    articleDitailsController.$inject = ['$stateParams', '$location', 'newsService'];

    function articleDitailsController($stateParams, $location, newsService) {
        var vm = this;

       


        newsService.getArticleDetails($stateParams.id).then(function (response) {
            vm.articleDetails = response.data
            console.log(response.data)

        })

    }
})();