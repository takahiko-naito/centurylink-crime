'use strict';

angular.module('cLink.services')
.service('SvcGeospatial', function (SvcSocrata) {
    var endpoint ='https://data.seattle.gov/resource/3k2p-39jp.json';


/*


CAD CDW ID
cad_cdw_id
CAD Event Number
cad_event_number
General Offense Number
general_offense_number
Event Clearance Code
event_clearance_code
Event Clearance Description
event_clearance_description
Event Clearance SubGroup
event_clearance_subgroup
Event Clearance Group
event_clearance_group
Event Clearance Date
event_clearance_date
Hundred Block Location
hundred_block_location
District/Sector
district_sector
Zone/Beat
zone_beat
Census Tract
census_tract
Longitude
longitude
Latitude
latitude
Incident Location
incident_location
Initial Type Description
initial_type_description
Initial Type Subgroup
initial_type_subgroup
Initial Type Group
initial_type_group
At Scene Time
at_scene_time
*/

    return {
        getAllNearbyIncidents : function(callbacks){ 
            var queryObject = {
                select : ['event_clearance_date', 'event_clearance_description', 'event_clearance_subgroup', 'event_clearance_group', 'incident_location', 'initial_type_description', 'initial_type_subgroup', 'initial_type_group', 'at_scene_time']
                ,where : ['within_circle(incident_location,47.59482,-122.333037,1609.34)']
                ,order : ['event_clearance_date ASC']
                ,limit : [50]
            };
            var query = SvcSocrata.getQueryString(queryObject);
            SvcSocrata.getJSON(endpoint,query,callbacks)
        }        
    };
});