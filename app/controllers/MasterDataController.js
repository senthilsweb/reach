'use strict';
reachApp.controller('masterDataController', function ($scope, masterDataService) {



    
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

    findAllTicketTypes();
    findAllPriorities();
    findAllRequestors();

});