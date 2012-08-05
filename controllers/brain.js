/*
 * brain.js
 *
 * where all the shit happens
 */

function controller() {
	//get list from peter
	//get numberofBins, start and end time
	var numberofBins = 0;
	var startTime = 0;
	var endTime = 100;
//	var points = listIterator(list, numberOfBins, startTime, endTime);
	var points = new Array();
	points.push(3);
	points.push(2);
	points.push(10);
	points.push(7);
	drawGraph(points);	
}


