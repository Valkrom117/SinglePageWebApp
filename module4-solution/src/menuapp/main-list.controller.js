(function () {
    'use strict';
    
    angular.module('data')
    .controller('MainListController', MainListController);
    
    MainListController.$inject = ['$stateParams','items'];
    function MainListController($stateParams, items) {
      var categories = this;
      categories.items = items.data;
      console.log("Categories object:", categories.items);

      categories.shout = function () {
        categories.categorieShortName();
      };

    }
    
    
    })();