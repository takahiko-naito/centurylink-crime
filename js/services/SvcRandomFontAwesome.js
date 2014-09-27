'use strict';
/*
	This class is used to generate random marker/color combinations and assign it to a specific incident_type_group.
	This is to help the user identify types of incidents more easily on the map.

	Note: Due to time constraints, I'm just going to choose from this randomly rather than spending time associating 
	40+ group names with 400+ font awesome class names. (see: /misc/font.awesome.incident.mapping.js)
*/

angular.module('cLink.services')
.service('SvcRandomFontAwesome', function () {
	var markerMapping = {
		'MENTAL CALL':{color:'red',icon:'file-text-o'},
		'MISCELLANEOUS':{color:'gray',icon:'share-alt'},
		'undefined':{color:'lightblue',icon:'file-text-o'},
		'SEX OFFENSE (NO RAPE)':{color:'darkblue',icon:'caret-up'},
		'RECKLESS BURNING':{color:'darkblue',icon:'plus-square-o'},
		'PUBLIC WATER':{color:'darkblue',icon:'rotate-left'},
		'PARKS EXCLUSIONS':{color:'lightgreen',icon:'pencil-square-o'},
		'GUN CALLS':{color:'lightgray',icon:'copy'},
		'PROWLER':{color:'black',icon:'slideshare'},
		'PERSON DOWN/INJURY':{color:'lightgreen',icon:'circle-o-notch'},
		'VICE CALLS':{color:'purple',icon:'map-marker'},
		'NOISE DISTURBANCE':{color:'orange',icon:'video-camera'},
		'HARBOR CALLS':{color:'green',icon:'stack-overflow'},
		'ANIMAL COMPLAINTS':{color:'darkblue',icon:'th-large'},
		'ROBBERY':{color:'lightgreen',icon:'female'},
		'ROAD RAGE':{color:'black',icon:'stethoscope'},
		'PROPERTY - MISSING, FOUND':{color:'purple',icon:'check-square-o'},
		'CASUALTIES':{color:'pink',icon:'vimeo-square'},
		'NARCOTICS COMPLAINTS':{color:'darkgreen',icon:'align-center'},
		'MISCELLANEOUS MISDEMEANORS':{color:'red',icon:'plus-square'},
		'PERSONS - LOST, FOUND, MISSING':{color:'darkred',icon:'cloud'},
		'ASSAULTS':{color:'pink',icon:'volume-up'},
		'TREES DOWN':{color:'green',icon:'spotify'},
		'FRAUD CALLS':{color:'pink',icon:'terminal'},
		'PARKING VIOLATIONS':{color:'purple',icon:'unlock'},
		'PROPERTY DAMAGE':{color:'orange',icon:'cloud-download'},
		'DISTURBANCES':{color:'blue',icon:'ellipsis-v'},
		'COMMERCIAL BURGLARIES':{color:'purple',icon:'angle-left'},
		'HAZARDS':{color:'blue',icon:'microphone'},
		'TRESPASS':{color:'cadetblue',icon:'angle-double-up'},
		'THREATS, HARASSMENT':{color:'orange',icon:'plane'},
		'THEFT':{color:'lightgreen',icon:'font'},
		'TRAFFIC RELATED CALLS':{color:'lightgreen',icon:'chevron-up'},
		'LIQUOR VIOLATIONS':{color:'orange',icon:'spotify'},
		'WEAPONS CALLS':{color:'darkgreen',icon:'btc'},
		'SUSPICIOUS CIRCUMSTANCES':{color:'red',icon:'angle-double-left'},
		'RESIDENTIAL BURGLARIES':{color:'purple',icon:'circle'},
		'AUTO RECOVERIES':{color:'blue',icon:'adn'}
	}
    return {
        getMarkerMapping : function(incidentTypeGroup){ 
        	return markerMapping[incidentTypeGroup];
        }
       
    };
});
