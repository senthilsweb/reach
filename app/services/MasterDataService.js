'use strict';
reachApp.factory('masterDataService', function ($http, $q) {
    return {
        findAllTicketTypes: function () {           
            var deferred = $q.defer(); //promise
            $http({ method: 'GET', url: 'data/dropdown-data.json' }).
                success(function (data, status, headers, config) {
                    console.log(data)
                    deferred.resolve(data.TicketTypes);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(status);                    
                });
            return deferred.promise;
        },

        findAllPriorities: function () {       
        var deferred = $q.defer(); //promise
        $http({ method: 'GET', url: 'data/dropdown-data.json' }).
            success(function (data, status, headers, config) {
                deferred.resolve(data.Priorities);
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status);                    
            });
        return deferred.promise;
        },

        findAllRequestors: function () {           
            var deferred = $q.defer(); //promise
            $http({ method: 'GET', url: 'data/dropdown-data.json' }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data.Requestors);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(status);                    
                });
            return deferred.promise;
        }
    }
})