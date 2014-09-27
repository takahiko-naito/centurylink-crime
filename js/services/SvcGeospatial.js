'use strict';

angular.module('cLink.services')
.service('SvcGeospatial', function (SvcRandomFontAwesome) {
    return {
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