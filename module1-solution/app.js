(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchController', LunchController);

LunchController.$inject = [$scope];
function LunchController ($scope) {
    $scope.lunchlist = "";
    $scope.message = "";
    $scope.color = "";
    $scope.CheckLunchList = function () {
        var message = IsItTooMuch($scope.lunchlist)
        $scope.message = message;
        var color = formatMessage ($scope.lunchlist)
        $scope.color = color;
    };
    

    function IsItTooMuch(string){
        var myArray = string.split(",")
        myArray = myArray.filter(Boolean)
        var myLength = myArray.length
        var message = "";
        if (string.length == 0) {
            message = "Please enter data first";

        } else if (myLength <= 3) {
            message = "Enjoy!"

        } else {
            message = "Too much!"

        }
        return message

    };

    function formatMessage (string) {
        var color = ""
        if (string.length == 0) {
            color = "red";
        } else {
            color = "green";
        }
        return color
    }
    
};



})();