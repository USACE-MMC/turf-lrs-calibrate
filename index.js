
var distance = require('turf-distance');
var point = require('turf-point');

module.exports = function(linestring, units){

	var cumulativeDistance = 0,
		cumulativeDistanceConverted = 0,
		oldCoords = linestring.geometry.coordinates || [],
		newCoords = [],
		point1,
		point2;

	//units can be of feet, miles, meters or kilometers, we get the distance in miles or kilometers
	//then have to convert if needed
	var dunits = units == 'feet' || units == 'miles' ? 'miles' : 'kilometers';
	var conversion = units == 'feet' ? 5280 : units == 'meters' ? 1000 : 1;

	oldCoords.forEach(function(coord){
		
		point1 = point(coord[0],coord[1]);

		cumulativeDistance = point2 ? cumulativeDistance + distance(point2, point1, dunits) : 0;

		cumulativeDistanceConverted = cumulativeDistance * conversion;
		
		newCoords.push([point1.geometry.coordinates[0],point1.geometry.coordinates[1],cumulativeDistanceConverted]);
		
		point2 = point1;

	});

	linestring.geometry.coordinates = newCoords;

	linestring.properties.dimArray = ['x','y','m'];

	return linestring;

}

