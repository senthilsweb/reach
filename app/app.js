    'use strict';
    var reachApp = angular.module('app', ['ngRoute', 'ngAnimate', 'highcharts-ng', 'ngHolder', 'nvd3ChartDirectives', 'ui.knob', 'datatables', 'datatables.bootstrap', 'ui.bootstrap'])
    .config([
      '$routeProvider', function ($routeProvider, $locationProvider) {
          var routes, setRoutes;
          routes = ['dashboard', 'login', 'upload','helpdesk'];
          setRoutes = function (route) {
              var config, url;
              url = '/' + route;
              config = {
                  templateUrl: 'app/views/' + route + '/' + route + '.html'
              };
              $routeProvider.when(url, config);
              // use the HTML5 History API
             
              return $routeProvider;
          };
          routes.forEach(function (route) {
              return setRoutes(route);
          });
          return $routeProvider.when('/', {
              redirectTo: '/login'
          }).when('/admin/reports', {
              templateUrl: 'app/views/admin/reports.html'
          }).when('/admin/hub', {
              templateUrl: 'app/views/admin/hub.html'
          }).when('/admin/ehc', {
              templateUrl: 'app/views/admin/ehc.html'
          }).when('/404', {
              templateUrl: 'views/pages/404.html'
          }).otherwise({
              redirectTo: '/login'
          });
          // use the HTML5 History API
          $locationProvider.html5Mode(true);
      }
    ]
    );


//# sourceMappingURL=app.js.map
