(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signInController', signInController);

    signInController.$inject = ['$uibModal', '$uibModalInstance'];

    function signInController($uibModal, $uibModalInstance) {
        var vm = this;
        vm.signUpOpen = signUpOpen;

        function signUpOpen() {
            $uibModalInstance.close();

            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/auth/sign-up/sign-up.tpl.html',
                size: 'sm',
                controller: 'signUpController',
                controllerAs: 'signUpCtrl'
            });

        }


       
    }
})();