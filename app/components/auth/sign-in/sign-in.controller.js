(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signInController', signInController);

    signInController.$inject = ['$uibModalInstance', 'authService'];

    function signInController($uibModalInstance, authService) {
        var vm = this;
        vm.signUpOpen = signUpOpen;

        function signUpOpen() {
            $uibModalInstance.close();
            authService.openRegisterDialog();
        }


       
    }
})();