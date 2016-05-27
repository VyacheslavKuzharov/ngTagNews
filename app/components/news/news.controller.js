(function () {
    'use strict';

    angular.module('ngTagNews')
        .controller('newsController', newsController);

    // newsController.$inject = []

    function newsController() {
        var vm = this;
        
        vm.message = 'Bootstrap works?'

    }
})();