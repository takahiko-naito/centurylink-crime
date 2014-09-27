angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcGeospatial) {
    var success = function(data){
      console.log(data);
    }

    SvcGeospatial.getJSON(success);
  }
);