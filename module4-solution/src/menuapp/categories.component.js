(function () {
    'use strict';

    angular.module('data')
    .component('categoriesList', {
        templateUrl: 'src/menuapp/templates/categories-list.template.html',
        bindings: {
            items: '<'
        }
    });

})();