(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signInController', signInController);

    signInController.$inject = ['$uibModalInstance', '$location', 'authService', 'store'];

    function signInController($uibModalInstance, $location, authService, store) {
        var vm = this;
        vm.signUpOpen = signUpOpen;
        vm.signInSubmit = signInSubmit;

        function signUpOpen() {
            $uibModalInstance.close();
            authService.openRegisterDialog();
        }
        
        function signInSubmit(user_credentials) {
            authService.login(user_credentials).then(function (response) {
                $uibModalInstance.close();
                store.set('token', response.data.token);
                $location.path('/');
            }, function (response) {
                vm.signInErrorMsg = response.data.error
                vm.showError = true;
            })
        }


       
    }
})();