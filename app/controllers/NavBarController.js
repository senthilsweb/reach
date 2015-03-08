'use strict';
reachApp.controller('navBarController', function ($rootScope,$scope, $location,$modal,$log) {   
   
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
     $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});
