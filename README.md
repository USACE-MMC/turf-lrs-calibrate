turf-lrs-calibrate
===============

I'm borrowing the turf name here because I'm building out linear referencing functionality `turf-lrs` to work seamlessly with the [turf.js](http://turfjs.org/) ecosystem.

Calibrates a linestring by adding an M coordinate to the coordinate array and a dimArray property of `['x','y','z','m']` to describe the values stored in the coordinate array.

See the [geojson spec](http://geojson.org/geojson-spec.html#positions) for more information on Positions and the index of values within Positions

###Parameters

|name|description|
|---|---|
|linestring|linestring feature|
|units|'feet', 'miles' , 'meters' or 'kilometers'|

###Usage

```js
calibrate(linestring, units)
```

###Example

```javascript
var linestring = require('turf-linestring')
var calibrate = require('turf-lrs-calibrate')

var basicLinestring = linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]], {name: 'line 1', distance: 145})

var calibratedLinestring = calibrate(basicLinestring,'miles')
  
console.log(calibratedLinestring)
```