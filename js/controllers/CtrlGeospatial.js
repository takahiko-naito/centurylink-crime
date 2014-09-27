'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcDataAccess,SvcGeospatial,SvcMetricsVisualization) {

    $scope.chartConfig = {};
    $scope.incidents = [];
    var callbacks = {
      success: function(data) {
        $scope.mapDefaults.markers = SvcGeospatial.getIncidentLocationMarkers(data);
        $scope.chartConfig = SvcMetricsVisualization.getIncidentBreakdownDonutChart(data);
        $scope.incidents = data;
      }
      ,error : function(err) { console.log(err); }
    };

    $scope.fromDate;
    $scope.untilDate = new Date(); 
    $scope.mapDefaults = SvcGeospatial.getLeafletMapDefaults();
    $scope.button = { 
      distance: 1
      , refresh : {
        click : function() { 
          var queryObject = {};
          SvcDataAccess.getNearbyIncidentsWithFilters(queryObject,callbacks);
        }
      }
    };

    SvcDataAccess.getAllNearbyIncidents(callbacks);
    
  }
);