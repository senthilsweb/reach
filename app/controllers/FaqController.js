'use strict';
reachApp.controller('faqController', function ($scope, FaqService) {
    console.log("--> faqController")
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    var findAllFaqs = function () {
        FaqService.findAll().then(function (res) {
            console.log(res[0].Question);            
            $scope.faqs = res;
        });
    }

    findAllFaqs();

});