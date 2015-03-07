'use strict';
reachApp.controller('masterDataController', function ($scope, masterDataService, $window) {


    $scope.signIn = function () {
        $window.location.href = '#/dashboard';
    };

    var findAllHubs = function () {
        console.log("findAllHubs")
        masterDataService.findAllHubs().then(function (res) {
            $scope.Hubs = res;
            console.log(res)
        });
    }

    var findAllTicketTypes = function () {
        console.log("findAllTicketTypes")
        masterDataService.findAllTicketTypes().then(function (res) {                       
            $scope.TicketTypes = res;
            console.log(res)
        });
    }

    var findAllPriorities = function () {
        masterDataService.findAllPriorities().then(function (res) {
            $scope.Priorities = res;
        });
    }
    var findAllRequestors = function () {
        masterDataService.findAllRequestors().then(function (res) {
            $scope.Requestors = res;
        });
    }

    var findAllHoldingDataStatus = function () {
        masterDataService.findAllHoldingDataStatus().then(function (res) {
            console.log(res);
            $scope.HoldingDataStatus = res;
        });
    }

    findAllTicketTypes();
    findAllPriorities();
    findAllRequestors();
    findAllHubs();
    findAllHoldingDataStatus();

});