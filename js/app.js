var app = angular.module('cLink', [
  'cLink.controllers',
  //'cLink.services',
  'ngRoute',
  //'lamApp.filters',
  //'fsCordova',
  //'ngAnimate',
  'leaflet-directive'
]);


angular.module('cLink.services', []);
angular.module('cLink.controllers', []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'templates/Map.html',
    controller: 'CtrlGeospatial'
  }).otherwise({redirectTo: '/map'});
}]);