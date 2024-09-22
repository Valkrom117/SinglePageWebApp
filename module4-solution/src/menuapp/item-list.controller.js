(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemListController', ItemListController);
    
    ItemListController.$inject = ['$stateParams','items'];
    function ItemListController($stateParams, items) {
      var itemList = this;
      itemList.items = items.data.menu_items;
      console.log(itemList.items)
      console.log($stateParams)
      

    }
    
    
    })();