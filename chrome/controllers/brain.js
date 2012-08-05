/*
 * brain.js
 *
 * where all the <s>shit</s>(guys. there are kids here) happens
 */

$(document).ready(function() {
	init();
	var practicePoints = [10, 20, 30, 55, 50];
	controller();
	
	$("#container").height($(document).height());
	
	// TODO amadu - connect this up (:
	// $('#colorpickerHolder').ColorPicker({flat: true});
});

function controller() {
	getTabEvents(function(objects) {
	  if (typeof objects == "undefined") {
		noTabs();
	  } else {
		var startTime = objects[0].time;
		var endTime = objects[objects.length-1].time;
		var numberofBins = 0;
		if ((endTime - startTime)/60 > 100) {
			numberofBins = 100;
		} else {
			numberofBins = Math.round((endTime - startTime)/60);
		}
		var points = listIterator(objects, numberofBins, startTime, endTime);
		drawGraph(points, startTime, endTime);
	  }
	});
}
