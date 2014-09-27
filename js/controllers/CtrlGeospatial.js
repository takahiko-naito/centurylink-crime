'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcDataAccess,SvcGeospatial) {
    var callbacks = {
      success: function(data) {
        $scope.mapDefaults.markers = SvcGeospatial.getIncidentLocationMarkers(data);
      }
      ,error : function(err) { console.log(err); }
    };
    
    $scope.mapDefaults = SvcGeospatial.getLeafletMapDefaults();
    SvcDataAccess.getAllNearbyIncidents(callbacks);
    
  }
);