(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .factory('authService', authService);

    authService.$inject = ['$http', '$uibModal', 'store', '$document'];

    function authService($http, $uibModal, store, $document) {
        return {
            login: login,
            logout: logout,
            register: register,
            isAuth: isAuth,
            openLoginDialog: openLoginDialog,
            openRegisterDialog: openRegisterDialog
        };

        function login(user_credentials) {
            return $http.post(CONFIG.APIHost + '/users/sign_in',
                {user: user_credentials},
                {headers: {'Content-Type': 'application/json' , 'Accept': 'application/json'}}
            )
        }

        function logout() {
            return $http.delete(CONFIG.APIHost + '/users/sign_out',
                {headers: {'Content-Type': 'application/json' , 'Accept': 'application/json'}}
            )
        }

        function register(user_credentials) {
            return $http.post(CONFIG.APIHost + '/users',
                {user: user_credentials},
                {headers: {'Content-Type': 'application/json' , 'Accept': 'application/json'}}
            )
        }

        function isAuth() {
            var token = store.get('token');
            // A token is present
            if (token) {
                // Token with a valid JWT format XXX.YYY.ZZZ
                if (token.split('.').length === 3) {
                    // Could be a valid JWT or an access token with the same format
                    try {
                        var base64Url = token.split('.')[1];
                        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                        var exp = JSON.parse($window.atob(base64)).exp;
                        // JWT with an optonal expiration claims
                        if (exp) {
                            var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
                            if (isExpired) {
                                // FAIL: Expired token
                                return false;
                            } else {
                                // PASS: Non-expired token
                                return true;
                            }
                        }
                    } catch(e) {
                        // PASS: Non-JWT token that looks like JWT
                        return true;
                    }
                }
                // PASS: All other tokens
                return true;
            }
            // FAIL: No token at all
            return false;
        }
        

        function openLoginDialog() {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/auth/sign-in/sign-in.tpl.html',
                size: 'sm',
                controller: 'signInController',
                controllerAs: 'signInCtrl'
            });
            $document.find('body').css('padding-right', '0px');
        }


        function openRegisterDialog() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/auth/sign-up/sign-up.tpl.html',
                size: 'sm',
                controller: 'signUpController',
                controllerAs: 'signUpCtrl'
            });
            $document.find('body').css('padding-right', '0px');
        }
    }
})();