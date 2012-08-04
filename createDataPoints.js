
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
}

