'use strict';
reachApp.controller('loginController', function ($scope, $window) {

    $scope.signIn = function () {
        $window.location.href = '#/dashboard';        
    };

    $scope.exampleData = [
                   { key: "One", y: 5 },
                   { key: "Two", y: 2 },
                   { key: "Three", y: 9 },
                   { key: "Four", y: 7 },
                   { key: "Five", y: 4 },
                   { key: "Six", y: 3 },
                   { key: "Seven", y: 9 }
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

    $scope.chartConfig = {

        options: {
            chart: {
                type: 'line'
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar','APR']
        },
        yAxis: {
            title: {
                text: 'Average Tickets'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        size: {
           
            height: 250
        },
        series: [{
            name: 'Complaints',
            data: [7, 12, 22,0]
        }, {
            name: 'Feedback',
            data: [4, 6, 13,0]
        }]
    },

    $scope.barChartConfig = {
        options: {  chart: {
            type: 'bar'
        }}
      ,
        title: {
            text: ' '
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '#. of tckets'
            }
        },
        legend: {
            enabled: false
        },
        size: {
           
            height: 300
        },
        series: [{
            name: 'Priority',
            data: [
                ['Normal', 128],
                ['Low', 78],
                ['High', 23],
                ['Urgent', 3]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                //format: '{point.y:.1f}', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    }



   

});