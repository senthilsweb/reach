'use strict';
reachApp.controller('mainController', function ($rootScope, $scope, $location) {


    //http://stackoverflow.com/questions/21715256/angularjs-event-to-call-after-content-is-loaded
    $scope.$on('$viewContentLoaded', function () {
        $rootScope.$broadcast('view-changed', { "view": $location.path() });        
    });
});