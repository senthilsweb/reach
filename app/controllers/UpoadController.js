'use strict';
reachApp.controller('uploadController', function ($scope) {
    $scope.creditCardType = [
          { "name": "Master Card", "value": "MC" }
        , { "name": "Visa", "value": "VS" }
        , { "name": "Americal Express", "value": "AX" }
    ]
    $scope.selectedItem = $scope.creditCardType[1];
});