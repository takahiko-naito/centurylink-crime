'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcGeospatial) {
    

    var callbacks = {
      success: function(data) {
        console.log(data);
      }
      ,error : function(err) {
        console.log(err);
      }
    };

    SvcGeospatial.getAllNearbyIncidents(callbacks);
  }
);