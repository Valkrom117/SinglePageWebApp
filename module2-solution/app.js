(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
    var ToBuy = this;

    ToBuy.items = ShoppingListCheckOffService.getItems();

    ToBuy.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
    };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
    var Bought = this;
    
    Bought.items =  ShoppingListCheckOffService.getBoughtItems();   

};

function ShoppingListCheckOffService() {
    var service = this;

    var items = [
        {
            name: "Milk",
            quantity: "2 bottles"
        },
        {
            name: "Apple",
            quantity: "2 Kg"
        },
        {
            name: "Pasta",
            quantity: "1 Kg"
        },
        {
            name: "Eggs",
            quantity: "30"
        },
        {
            name: "Bananas",
            quantity: "6"
        }
    ];

    var boughtitems = [];

    service.getItems = function () {
        return items;
      };

    service.getBoughtItems = function () {
        return boughtitems;
    };

    service.removeItem = function (itemIndex) {
        boughtitems.push(items[itemIndex])
        items.splice(itemIndex, 1);
    };
    
}

})();