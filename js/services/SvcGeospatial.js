'use strict';

angular.module('cLink.services')
.service('SvcGeospatial', function ($http) {
    var ENDPOINT ='https://data.seattle.gov/resource/3k2p-39jp.json';
    var withinOneMile = '?$where=within_circle(incident_location,47.59482,-122.333037,1609.34)';


    return {
        getJSON : function(success,error){ $http.get(ENDPOINT + withinOneMile).success(success).error(error); }        
    };
});