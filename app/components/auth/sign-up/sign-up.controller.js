(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['$uibModalInstance', '$location', 'store', 'authService'];
    
    function signUpController($uibModalInstance, $location, store, authService) {
        var vm = this;
        vm.signInOpen = signInOpen;
        vm.signUpSubmit = signUpSubmit;
        
        function signInOpen() {
            $uibModalInstance.close();
            authService.openLoginDialog();
        }

        function signUpSubmit(user_credentials) {
            authService.register(user_credentials).then(function (response) {
                $uibModalInstance.close();
                store.set('token', response.data.token);
                $location.path('/');
            }, function (response) {
                vm.RegErrorsMsg = response.data.errors;
                vm.showRegError = true;
            })
        }



    }
})();