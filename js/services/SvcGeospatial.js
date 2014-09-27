'use strict';

angular.module('cLink.services')
.service('SvcGeospatial', function ($http) {
    var ENDPOINT ='https://data.seattle.gov/resource/3k2p-39jp.json';


    return {
        getJSON : function(success,error){ $http.get(ENDPOINT).success(success).error(error); }        
    };
});