'use strict';
/*
	SvcSocrata.js
	=============
	Author: Zach Cowell
	Description: Service API wrapper for Socrata API calls. 
	WARNING: Due to time constraints, not all methods are supported at this time and not all test cases have been evaluated.

	Improvements for future consideration
	-------------------------------------
		- Adjust WHERE clause to accept ANDs, ORs, NOTs, etc.
		- Abstract out location specific functionality for the where clause (e.g., within_circle, within_box methods)
		- Better error handling.
*/

angular.module('cLink.services')
.service('SvcSocrata', function ($http) {
	/*
		Clause 	Description							
		$select	The set of columns to be returned	
		$where	Filters the rows to be returned	
		$order	Specifies the order of results	
		$group	Column to group results on, similar to SQL Grouping
		$limit	Maximum number of results to return	
		$offset	Offset count into the results to start at, used for paging	
		$q 		Performs a full text search for a value.	
	*/
	var clauseAssembly = {
		getSelectClause : function(select){
			if (select.length > 0) {
				return '$select=' + select.join(',') + '&';
			}
			else {
				return '';
			}
        },
        getWhereClause : function(where){
			if (where.length > 0) {
				return '$where=' + where.join(' AND ') + '&'; //Assuming all ands for my particular cases; will add in other operators later.
			}
			else {
				return '';
			}
        },
        getOrderClause : function(order){
        	return '$order=' + order + '&' ;
        },
        getGroupClause : function(group){
        	return '$group=' + group + '&';
        },
        getLimitClause : function(limit){
        	return '$limit=' + limit + '&';
        },
        getOffset : function(offset){
        	return '$offset=' + offset + '&';
        },
        getFullTextSearch : function(q){
        	return '$q=' + q + '&';
        }
	}
    return {
        getQueryString : function(queryObject){ 
        	var query = "";
        	if (queryObject.select) { query+= clauseAssembly.getSelectClause(queryObject.select); 	}
        	if (queryObject.where) 	{ query+= clauseAssembly.getWhereClause(queryObject.where); 	}
        	if (queryObject.order) 	{ query+= clauseAssembly.getOrderClause(queryObject.order); 	}
        	if (queryObject.group) 	{ query+= clauseAssembly.getGroupClause(queryObject.group); 	}
        	if (queryObject.limit) 	{ query+= clauseAssembly.getLimitClause(queryObject.limit); 	}
        	if (queryObject.offset) { query+= clauseAssembly.getOffset(queryObject.offset); 		}
        	if (queryObject.q) 		{ query+= clauseAssembly.getFullTextSearch(queryObject.q); 		}

        	if (query.slice(-1) == '&') { 
        		query = query.slice(0,-1); 
        	}

        	return query;
        },
        getJSON : function (endpoint,queryString,callbacks){
        	var request = endpoint;
        	var success = callbacks ? callbacks.success : function(data) { console.log(data); }
        	var error = callbacks ? callbacks.error : function(err) { console.log(err); }
        	if (queryString) { request+= '?' + queryString; }
        	$http.get(request).success(success).error(error);
        }        
    };
});