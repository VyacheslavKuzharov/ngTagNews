(function () {
    'use strict';

    angular
        .module('ngTagNews')
        .directive('newsFooter', newsFooter);

    function newsFooter() {
        return {
            templateUrl: 'app/components/footer/footer.tpl.html'
        }
    }
})();