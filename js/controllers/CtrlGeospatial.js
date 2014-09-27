'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcDataAccess,SvcGeospatial,SvcMetricsVisualization) {
    $scope.chartConfig = {};
    $scope.button = { 
      distance: 1
      , refresh : {
        click : function() { 
          console.log('refresh') ;
        }
      }
    };
    $scope.fromDate;
    $scope.untilDate = new Date(); 

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