(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService']
function MyInfoController (MenuService) {
    var myInfoCtrl = this;
    myInfoCtrl.user = MenuService.getUserInfo();
    myInfoCtrl.userExist = function () {
        if( myInfoCtrl.user.username === undefined) {return false}
        else {return true}
    };

    myInfoCtrl.content = (MenuService.getSingleMenuItem(myInfoCtrl.user.favoritedish, myInfoCtrl.user.favoritedishid)).then(function (response) { 
        myInfoCtrl.item = response
    })

    console.log(myInfoCtrl.item)
    
    
}
        
})();
        