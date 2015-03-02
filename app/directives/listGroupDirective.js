'use strict';
//Good reference to create custom directive
//http://www.ng-newsletter.com/posts/directives.html
reachApp.directive('listGroup', function () {
    return {
        restict: 'E',
        templateUrl: 'app/views/directiveTemplates/listgroup/listgroup.html',
        controller: ['$scope', '$http', function ($scope, $http) {
            $scope.items = [
                  { "name": "Open", "count": 5, "icon": "fa-unlock-alt" }
                , { "name": "Inprogress", "count": 10, "icon": "fa-spinner" }
                , { "name": "Closed", "count": 34, "icon": "fa-lock" }
                , { "name": "Overrun", "count": 0, "icon": "fa-clock-o" }
                , { "name": "Assigned", "count": 4, "icon": "fa-user" }
                , { "name": "Abandoned", "count": 27, "icon": "fa-times-circle" }
            ]
        }],
        link: function (scope, element, attrs, controller) {            
        }
    };
});