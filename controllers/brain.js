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
	getTabEvents(function(points) {
		var numberofBins = 0;
		var startTime = points[0].time;
		var endTime = points[points.length-1].time;
		drawGraph(points);
	});
}
