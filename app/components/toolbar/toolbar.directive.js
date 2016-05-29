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

        function toolbarController(authService, $location, store) {
            var vm = this;
            vm.openlogin = openlogin;
            vm.logout = logout;
            vm.authService = authService;
            


            function openlogin() {
                authService.openLoginDialog();
            }

            function logout() {
                authService.logout().then(function (response) {
                    console.log(response)
                    
                    if(response.status == 204){
                        store.remove('token');
                        $location.path('/');
                    }
                })
            }
        }
    }
})();