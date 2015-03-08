'use strict';
reachApp.controller('mainController', function ($rootScope, $scope, $location,$timeout) {
    //http://stackoverflow.com/questions/21715256/angularjs-event-to-call-after-content-is-loaded
    $scope.$on('$viewContentLoaded', function (args,item) {       
        console.log("Loaded View = [ " + $location.path() + "]");
        $rootScope.$broadcast('view-changed', { "view": $location.path() });
        if ($location.path() == '/login') {
            $.backstretch(["http://www.goldcoastlocal.co/images/bg.jpg"], { fade: 1000, duration: 6000 });
            //"http://stephenmuscat.com/twilli_air/1.2.3/assets/images/other_images/bg5.jpg", 
            $(".background-image-overlay").show();
        } else {                  
            $.backstretch("app/img/white.png", { fade: 1000 });
            $(".background-image-overlay").hide();
        }
    });
})