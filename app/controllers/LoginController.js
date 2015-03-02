'use strict';
reachApp.controller('loginController', function ($scope, $window) {

    $scope.signIn = function () {
        $window.location.href = '#/dashboard';        
    };
});