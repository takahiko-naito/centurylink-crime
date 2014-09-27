'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcDataAccess,SvcGeospatial,SvcMetricsVisualization) {
    $scope.chartConfig = {};
    var callbacks = {
      success: function(data) {
        $scope.mapDefaults.markers = SvcGeospatial.getIncidentLocationMarkers(data);
        $scope.chartConfig = SvcMetricsVisualization.getIncidentBreakdownDonutChart(data);
      }
      ,error : function(err) { console.log(err); }
    };
    
    $scope.mapDefaults = SvcGeospatial.getLeafletMapDefaults();
    SvcDataAccess.getAllNearbyIncidents(callbacks);
    
  }
);