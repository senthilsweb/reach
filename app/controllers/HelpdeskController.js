'use strict';
reachApp.controller('helpdeskController', function ($timeout,$location, $rootScope, $scope) {
    $scope.creditCardType = [
          { "name": "Master Card", "value": "MC" }
        , { "name": "Visa", "value": "VS" }
        , { "name": "Americal Express", "value": "AX" }
    ]
    $scope.selectedItem = $scope.creditCardType[1];


    $rootScope.$on('view-changed', function (event, args) {
        if (args.view == $location.path()) {
            console.log(args.view == $location.path())
            //http://stackoverflow.com/questions/14483348/query-function-not-defined-for-select2-undefined-error
            //$timeout(function () { $("select.vm-select2").select2() }, 10);
        }
    });

    

});