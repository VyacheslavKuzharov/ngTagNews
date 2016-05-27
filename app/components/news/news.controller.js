(function () {
    'use strict';

    angular.module('ngTagNews')
        .controller('newsController', newsController);

    newsController.$inject = ['$stateParams'];

    function newsController($stateParams) {
        var vm = this;
        vm.pageChanged = pageChanged;

        vm.maxSize = 5;
        vm.CurrentPage = $stateParams.page || 1;
        vm.totalItems = 50;

        function pageChanged() {

        }

    }
})();