/*
 * brain.js
 *
 * where all the shit happens
 */

$(document).ready(function() {
	init();
	var practicePoints = [10, 20, 30, 55, 50];
	controller();
	
	// TODO amadu - connect this up (:
	// $('#colorpickerHolder').ColorPicker({flat: true});
});

function controller() {
	//get list from peter
	//get numberofBins, start and end time
	var numberofBins = 0;
	var startTime = 0;
	var endTime = 100;
//	var points = listIterator(list, numberOfBins, startTime, endTime);
	var points = new Array();
	points.push(0);
	points.push(2);
	points.push(1);
	points.push(3);
	points.push(10);
	drawGraph(points);	

	addXAxisLabels(points.length, startTime);
}


