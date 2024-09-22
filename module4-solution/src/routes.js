(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'MainListController as categories',
    params: {itemId: null},
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemList', {
    url: '/itemList/{shortName}',
    templateUrl: 'src/menuapp/templates/item-list.template.html',
    controller: 'ItemListController as itemList',
    params: {shortName: null},
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  });
}

})();