'use strict';
reachApp.controller('loginController', function ($scope, $window) {

    $scope.signIn = function () {
        $window.location.href = '#/dashboard';        
    };

    $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [[0, 100], [10, 200], [20, 300], [40, 400], [60, 600], [70, 700], [80, 800]]
                }
    ];
    $scope.exampleData1 = [
 { key: "One", y: 5 },
{ key: "Two", y: 2 },
       { key: "Three", y: 9 },
         { key: "Four", y: 7 },
        { key: "Five", y: 4 },
         { key: "Six", y: 3 },
        { key: "Seven", y: 9 }
    ];

    $scope.xFunction = function () {
        return function (d) {
            return d.key;
        };
    }
    $scope.yFunction = function () {
        return function (d) {
            return d.y;
        };
    }

});