(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['$uibModalInstance', 'authService'];
    
    function signUpController($uibModalInstance, authService) {
        var vm = this;
        vm.signInOpen = signInOpen;
        
        function signInOpen() {
            $uibModalInstance.close();
            authService.openLoginDialog();
        }



    }
})();