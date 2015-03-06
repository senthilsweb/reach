/**
 * Created with JetBrains WebStorm.
 * User: NitinSa
 * Date: 4/3/15
 * Time: 9:56 PM
 * To change this template use File | Settings | File Templates.
 */
reachApp.controller('uploadSearchController', function ($scope,$rootScope) {

    $scope.SearchClicked=function(){
       $rootScope.Search=true;

    }

    $scope.open = function($event) {


        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];



});