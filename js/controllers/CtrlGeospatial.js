'use strict';

angular.module('cLink.controllers')
.controller('CtrlGeospatial', 
  function($scope,SvcGeospatial, SvcSocrata) {
    
    var queryObject = {
        select : ['initial_type_description','initial_type_subgroup','incident_location','hundred_block_location','at_scene_time','initial_type_group']
        ,where : []
        ,order : ['at_scene_time DESC']
        ,limit : [100]
    };

    var str = SvcSocrata.getQuery(queryObject);
    console.log(str);
  }
);