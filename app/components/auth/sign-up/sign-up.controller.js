(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['$uibModal', '$uibModalInstance'];
    
    function signUpController($uibModal, $uibModalInstance) {
        var vm = this;
        vm.signInOpen = signInOpen;
        
        function signInOpen() {
            $uibModalInstance.close()
            
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/auth/sign-in/sign-in.tpl.html',
                size: 'sm',
                controller: 'signInController',
                controllerAs: 'signInCtrl'
            });
        }



    }
})();