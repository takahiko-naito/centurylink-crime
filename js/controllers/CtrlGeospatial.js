'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcGeospatial) {
    $scope.mapDefaults = SvcGeospatial.getLeafletMapDefaults();;

    var callbacks = {
      success: function(data) {
        console.log(data);
        $scope.mapDefaults.markers = SvcGeospatial.getIncidentLocationMarkers(data);
      }
      ,error : function(err) {
        console.log(err);
      }
    };

    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
    
    SvcGeospatial.getAllNearbyIncidents(callbacks);
  }
);