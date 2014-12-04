var test = require('tape');
var calibrate = require('./')

var linestring = require('turf-linestring')

test('calibrate', function(t){
  t.plan(5)

  var line = linestring([[5, 10], [20, 40]], {name: 'test line'})

  var calibLine = calibrate(line,'miles');

  t.ok(calibLine);
  t.equal(calibLine.geometry.coordinates[0][0], 5);
  t.equal(calibLine.geometry.coordinates[1][1], 40);
  t.equal(calibLine.geometry.coordinates[1][2], 2268.77808190803);
  t.equal(calibLine.properties.name, 'test line');
  console.log(calibLine);
  t.end();
});