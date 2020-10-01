(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
    $scope.lunch = "";
    
    $scope.giveAnswer = function () {
        const words = $scope.lunch.split(',');
        if ($scope.lunch === "") { 
            $scope.result = "Please enter data first"; 
        }
        else if (words.length <= 3) {
            $scope.result = "Enjoy!";
        }
        else {
            $scope.result = "Too much!";
        }
    }
}
})();