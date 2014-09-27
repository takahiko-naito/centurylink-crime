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

    var uniqueIncidentGroupSuccess = function(data) {
      var newdata = [];
      _.each(data,function(x){ 
        newdata.push({
          count: parseInt(x.count), 
          group: x.initial_type_group
        }); 
      });
      
      

    }
    SvcGeospatial.getAllUniqueIncidentGroups({success : function(data){
      
      
    }, error: function(){} });

    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
    
    SvcGeospatial.getAllNearbyIncidents(callbacks);
  }
);