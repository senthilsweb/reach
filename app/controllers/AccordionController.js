'use strict';
reachApp.controller('accordionController', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
          title: 'What is eHC?',
          content: 'Cloud Enabled Healthcare Infrastructure Solution and Health Data Analytics'
      },
      {
          title: 'E-Health Center',
          content: 'Cloud Enabled Primary Healthcare Solution packaged in shiiping container with medical equipments and teleconsulting'
      }
    ];

   

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});