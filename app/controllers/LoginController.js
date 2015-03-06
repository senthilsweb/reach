'use strict';
reachApp.controller('loginController', function ($scope, $window) {

    $scope.signIn = function () {
        $window.location.href = '#/dashboard';        
    };

    $scope.exampleData = [
         {
             "key": "Series 1",
             "values": [{ "x": "2010", "y": 40 }, { "x": "2011", "y": 60 }, { "x": "2012", "y": 80 }]
         },
         {
             "key": "Series 2",
             "values": [{ "x": "2010", "y": 50 }, { "x": "2011", "y": 80 }, { "x": "2012", "y": 90 }]
         },
         {
             "key": "Series 3",
             "values": [{ "x": "2010", "y": 10 }, { "x": "2011", "y": 40 }, { "x": "2012", "y": 120 }]
         }
    ];



    $scope.TicketsByPriority = [
                {
                    "key": "Series 1",
                    "values": [
                    	["Normal", 23],
                    	["Low", 43],
                    	["High", 25],
                    	["Urgent", 3]
                    ]
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

    $scope.xAxisTickFormatFunction = function () {
        return function (d) {
            return d3.time.format('%Y')(new Date(d));
        }
    }

    $scope.yAxisTickFormatFunction = function () {
        return function (d) {
            return d3.format('d')(d);
        }
    }

    $scope.xFunction = function () {
        return function (d) {
            console.log(d3.time.format('%x')(new Date(d[0])))
            return d[0];
        };
    }
    $scope.yFunction = function () {
        return function (d) {
            return d[1];
        };
    }

    $scope.colorFunction = function () {
        return function (d, i) {
            return '#E01B5D'
        };
    }

    $scope.FormatX = function () {
        return function (d, i) {
            return d3.time.format('%x')(new Date(d))
        };
    }

    $scope.xAttributeFunction = function () {
        return function (d) {
            return d.x;
        };
    }
    $scope.yAttributeFunction = function () {
        return function (d) {
            return d.y;
        };
    }


   

});