(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
    
    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this;
        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
        return response
        };

        service.getItemsForCategory = function (categoryShortName) {
            console.log(categoryShortName)
            var response = $http({
                method: "GET",
                // url: (ApiBasePath + "/menu_items/L.json")
                url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
            });
        return response
        };

        // service.clickMe = function() {
        //     console.log("Click Me!")
        // };
    
    }

    })();