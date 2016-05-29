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

        function toolbarController($uibModal) {
            var vm = this;
            vm.openlogin = openlogin;


            function openlogin() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'app/components/auth/sign-in/sign-in.tpl.html',
                    size: 'sm',
                    controller: 'signInController',
                    controllerAs: 'signInCtrl'
                });
            }
        }
    }
})();