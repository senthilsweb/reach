'use strict';
reachApp.factory('FaqService', function ($http, $q) {
    return {
        findAll: function (pageNumber) {
            pageNumber = 1;
            var deferred = $q.defer(); //promise
            $http({ method: 'GET', url: 'data/faq-data.json?page=' + pageNumber + '&per_page=10' }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});