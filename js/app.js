'use strict';

var app = angular.module('cLink', [
  'cLink.controllers',
  'cLink.services',
  'ngRoute',
  'leaflet-directive',
  'highcharts-ng',
  'mgcrea.ngStrap'
]);


angular.module('cLink.services', []);
angular.module('cLink.controllers', []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'templates/Map.html',
    controller: 'CtrlGeospatial'
  }).otherwise({redirectTo: '/map'});
}]);