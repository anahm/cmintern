function controller() {
	//get list from peter
	//get numberofBins, start and end time
	var points = listIterator(list, numberOfBins, startTime, endTime);
	drawGraph(points);	
}

function convertToPixels (points, height) {
	var yValues = new Array();
	var largest = Math.max.apply(Math, points);
	var actualPoints = new Array();
	for (var i = 0; i < points.size; i++) {
		var point = points[i];
		yValues.push(height*point/largest);
	}
	return yValues;
}

function listIterator(list, numberOfBins, startTime, endTime) {
	var binIndex = 0;
	var points = new Array();
	var binGap = (endTime - startTime) / numberOfBins;
	for (timeObject in list) {		
		if (timeObject.time > endTime) break;
		if (timeObject.time >= startTime) {
			if (typeof points[binIndex] == 'undefined') {
				points[binIndex] = 0;
			}
			if (timeObject.time <= startTime + (binIndex * binGap)){
			    if (timeObject.opened) points[binIndex]++;
				else points[binIndex]--;
			} else {
				binIndex++;
			}
		}
	}
	return points;
}

