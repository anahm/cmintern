/*
 * brain.js
 *
 * where all the <s>shit</s>(guys. there are kids here) happens
 */

$(document).ready(function() {
	init();
	var practicePoints = [10, 20, 30, 55, 50];
	controller();
	
	// TODO amadu - connect this up (:
	// $('#colorpickerHolder').ColorPicker({flat: true});
});

function controller() {
	getTabEvents(function(objects) {
		var numberofBins = 24;
		var startTime = objects[0].time;
		var endTime = objects[objects.length-1].time;
		var points = listIterator(objects, numberofBins, startTime, endTime);
		drawGraph(points);
	});
}
