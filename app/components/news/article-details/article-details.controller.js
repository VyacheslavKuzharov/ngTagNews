(function () {
    'use strict';

    angular.module('ngTagNews')
        .controller('articleDitailsController', articleDitailsController);

    articleDitailsController.$inject = ['$stateParams', '$location', 'newsService'];

    function articleDitailsController($stateParams, $location, newsService) {
        var vm = this;

        // vm.myInterval = 5000;
        // vm.noWrapSlides = false;
        // vm.active = 0;

        newsService.getArticleDetails($stateParams.id).then(function (response) {
            vm.articleDetails = response.data;
        })

    }
})();