/*
 * createDataPoints.js
 *
 * taking the list given to us from pete and converting it into
 * pixel data points for us to draw easier on html canvas
 */

function convertToPixels (points, height, heightPadding) {
	var yValues = new Array();
	var largest = Math.max.apply(Math, points);
	var actualPoints = new Array();
	for (i = 0; i < points.length; i++) {
		var point = points[i];
		yValues.push(height - heightPadding/2 - (height-heightPadding)*point/largest);
	}
	return yValues;
}

function listIterator(list, numberOfBins, startTime, endTime) {
	var binIndex = 0;
	var points = new Array();
	var timeBinGap = (endTime - startTime) / numberOfBins;
	for (timeObject in list) {		
		if (timeObject.time > endTime) break;
		if (timeObject.time >= startTime) {
			if (typeof points[binIndex] == 'undefined') {
				points[binIndex] = 0;
			}
			if (timeObject.time <= startTime + (binIndex * timeBinGap)){
			    if (timeObject.opened) points[binIndex]++;
				else points[binIndex]--;
			} else {
				binIndex++;
			}
		}
	}
	return points;
}

