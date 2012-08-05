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
	var points = new Array(numberOfBins + 1);
	for (j = 0; j < numberOfBins + 1; j++) {
		points[j] = 0;
	}
	var timeBinGap = (endTime - startTime) / numberOfBins;
	var timeObject = 0;
	while (timeObject < list.length ) {	
		if (list[timeObject].time > endTime) break;
		if (list[timeObject].time >= startTime) {
			if (list[timeObject].time <= startTime + (binIndex * timeBinGap)){
			    points[binIndex] = list[timeObject].tabs;
				timeObject++;
			} else {
				binIndex++;
				points[binIndex] = points[binIndex - 1];
			}
		}
	}
	return points;
}

