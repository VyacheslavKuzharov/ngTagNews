(function () {
    'use strict';
    angular.module('ngTagNews')
        .directive('toolbar', toolbar);

    function toolbar() {
        return {
            templateUrl: 'app/components/toolbar/toolbar.tpl.html',
            controller: toolbarController,
            controllerAs: 'toolbarCtrl'
        };

        function toolbarController(authService) {
            var vm = this;
            vm.openlogin = openlogin;


            function openlogin() {
                authService.openLoginDialog();
            }
        }
    }
})();