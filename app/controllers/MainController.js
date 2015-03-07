'use strict';
reachApp.controller('mainController', function ($rootScope, $scope, $location,$timeout) {
    //http://stackoverflow.com/questions/21715256/angularjs-event-to-call-after-content-is-loaded
    $scope.$on('$viewContentLoaded', function (args,item) {       
        console.log("Loaded View = [ " + $location.path() + "]");
        $rootScope.$broadcast('view-changed', { "view": $location.path() });
        if ($location.path() == '/login') {
            $.backstretch("https://dl.dropboxusercontent.com/u/515046/www/outside.jpg", { fade: 1000, duration: 3000 });           
        } else {                  
            $.backstretch("app/img/white.png", { fade: 1000 });            
        }
    });
});