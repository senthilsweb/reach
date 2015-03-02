'use strict';
reachApp.controller('navBarController', function ($rootScope,$scope, $location) {   
   
    $scope.noop = function () {
        console.log("noop")       
        angular.noop();
    };

    $scope.isActive= function (menu){
        return menu ==$location.path();
    };
    $rootScope.$on('view-changed', function (event, args) {        
        $scope.visible = ($location.path() == '/login') ? false : true;
        $scope.active = "";
        
    });  
});