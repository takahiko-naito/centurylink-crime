'use strict';

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

angular.module('cLink.services')
.service('SvcMetricsVisualization', function () {
    return {
        getTimeSeriesHelper : function(data){
            
            var seriesObj = [];
            _.each(data,function(item){
                var dateTime = new Date(item.month);
                var d = dateTime.getDate();
                var m = dateTime.getMonth() + 1;
                var y = dateTime.getFullYear();
                var point = parseInt(item.count);
                seriesObj.push([Date.UTC(y,m,d),point]); 
            });
            return seriesObj;
            //chartConfig.series.push({ name: 'Inspections', data: seriesObj });
     
        },
        getIncidentTimeSeriesChart : function(data){
            var series = this.getTimeSeriesHelper(data);
            console.log(series);
            return {
             options: {
                 chart: {
                     type: 'spline'
                 },
                xAxis: { 
                    type: 'datetime',title: { enabled: false, text: 'Date' },
                },

             },
             series: [{
                name: 'Incidents',
                data: series
             }],
             //Title configuration (optional)
             title: {
                 text: 'Incident Count Over Time'
             }

            };
        },
        getIncidentBreakdownDonutChart : function(data) {
        
        var colors = Highcharts.getOptions().colors;
        var colorIndex = 0;
        var chartData = [];
        var groupingData = [];
        var subgroupingData = [];
        var i;
        var j;
        var drillDataLen;
        var brightness;
        
        var initialTypeGrouping = _.groupBy(data,function(incident){ return incident.initial_type_group; });
        
        _.each(initialTypeGrouping, function(group){
            var subgrouping = _.groupBy(group,function(subgroup){
                return subgroup.initial_type_subgroup;
            });
            var drilldown = {
                name : group[0].initial_type_group,
                categories : [],
                data : [],
                color: colors[colorIndex]
            };
            _.each(subgrouping,function(subgroup){
                drilldown.categories.push(subgroup[0].initial_type_subgroup);
                drilldown.data.push(subgroup.length);
            });
            chartData.push({
                name : group[0].initial_type_group,
                y: group.length,
                drilldown: drilldown,
                color: colors[colorIndex] || 'blue'
            });
            colorIndex++;
        });
        var dataLen = chartData.length;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            groupingData.push({
                name: chartData[i].name,
                y: chartData[i].y,
                color: chartData[i].color
            });

            // add version data
            drillDataLen = chartData[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                subgroupingData.push({
                    name: chartData[i].drilldown.categories[j],
                    y: chartData[i].drilldown.data[j],
                    color: Highcharts.Color(chartData[i].color).brighten(brightness).get()
                });
            }
        }


            return {
                options: {
                    chart: { type: 'pie' },
                    title: { text: 'Incident Breakdown (Group, Subgroup)' },
                    yAxis: {
                        title: {
                            text: 'Total percentage'
                        }
                    },
                    plotOptions: {
                        pie: {
                            shadow: false,
                            center: ['50%', '50%']
                        }
                    },
                    tooltip: { valueSuffix: '%'}
                },
                series: [{
                    name: 'Incident Group',
                    data: groupingData,
                    size: '90%',
                    dataLabels: {
                        enabled: false
                    }
                }, {
                    name: 'Incident Subgroup',
                    data: subgroupingData,
                    size: '100%',
                    innerSize: '90%',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }
    }
});