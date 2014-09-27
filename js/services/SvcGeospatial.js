'use strict';

angular.module('cLink.services')
.service('SvcGeospatial', function (SvcSocrata,SvcRandomFontAwesome) {
    var endpoint ='https://data.seattle.gov/resource/3k2p-39jp.json';


/*
    Field Reference
    -----------------------------
    cad_cdw_id
    cad_event_number
    general_offense_number
    event_clearance_code
    event_clearance_description
    event_clearance_subgroup
    event_clearance_group
    event_clearance_date
    hundred_block_location
    district_sector
    zone_beat
    census_tract
    longitude
    latitude
    incident_location
    initial_type_description
    initial_type_subgroup
    initial_type_group
    at_scene_time
*/

    return {
        getAllNearbyIncidents : function(callbacks){ 
            var query = SvcSocrata.getQueryString({
                select : ['event_clearance_date', 'event_clearance_description', 'event_clearance_subgroup', 'event_clearance_group', 'incident_location', 'initial_type_description', 'initial_type_subgroup', 'initial_type_group', 'at_scene_time']
                ,where : ['within_circle(incident_location,47.59482,-122.333037,1609.34)']
                ,order : ['event_clearance_date DESC']
                ,limit : [50]
            });
            SvcSocrata.getJSON(endpoint,query,callbacks);
        },
        getAllUniqueIncidentGroups : function(callbacks){
            var query = SvcSocrata.getQueryString({
                select : ['initial_type_group','count(*)']
                ,where : ['within_circle(incident_location,47.59482,-122.333037,1609.34)']
                ,group : ['initial_type_group']
            });
            SvcSocrata.getJSON(endpoint,query,callbacks);
        },
        getLeafletMapDefaults : function(){
            return {
                center: {
                    lat: 47.59482,
                    lng: -122.333037,
                    zoom: 14
                },
                defaults : {
                    scrollWheelZoom : true
                }
            };
        },
        getMarkerMessageText : function(incident){
            return incident.initial_type_description; //TODO : make marker display more information
        },
        getLeafletMarkerIcon : function(incident){
            var markerObject = SvcRandomFontAwesome.getMarkerMapping(incident.initial_type_group);
            return {
                type: 'awesomeMarker'
                ,prefix: 'fa'
                ,icon: markerObject.icon
                ,markerColor: markerObject.color
            }
        },
        getIncidentLocationMarkers : function(data,markerMapping){
            var markers = [];
            var that = this;
            _.each(data,function(incident){
                markers.push({
                    lat : parseFloat(incident.incident_location.latitude),
                    lng : parseFloat(incident.incident_location.longitude),
                    message : that.getMarkerMessageText(incident),
                    icon: that.getLeafletMarkerIcon(incident),
                    focus : false,
                    draggable : false
                })
            });
            return markers;
        }        
    };
});