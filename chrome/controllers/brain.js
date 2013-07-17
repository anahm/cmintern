/*
 * brain.js
 *
 * where all the <s>shit</s>(guys. there are kids here) happens
 */

$(document).ready(function() {
	init();

	controller();
	initPanel();

	$("#container").height($(document).height());

	$("#allTime").click(function() {
		resetStartTime();
		$("#allTime").addClass("selected");
		$("#allTime").siblings().removeClass();
	});

	$("#lastHour").click(function() {
		setStartTime(getEndTime() - 3600);
		$("#lastHour").addClass("selected");
		$("#lastHour").siblings().removeClass();
	});

	$("#lastSixHours").click(function() {
		setStartTime(getEndTime() - 21600);
		$("#lastSixHours").addClass("selected");
		$("#lastSixHours").siblings().removeClass();
	});

	$("#lastDay").click(function() {
		setStartTime(getEndTime() - 86400);
		$("#lastDay").addClass("selected");
		$("#lastDay").siblings().removeClass();
	});

	$("#toggleLine").click(function() {
		setShowLines(!getShowLines());
	});
	$("#togglePoints").click(function() {
		setShowPoints(!getShowPoints());
	});
	$("#toggleFill").click(function() {
		setShowFilling(!getShowFilling());
	});
	$("#toggleHorizontalLines").click(function() {
		setShowHorizLines(!getShowHorizLines());
	});
	$("#toggleVerticalLines").click(function() {
		setShowVerticalLines(!getShowVerticalLines());
	});

	$("#graphcolor").change(function() {
		setGraphFillColor(this.color);
	});

	$("#linecolor").change(function() {
		setLineColor(this.color);
	});

	$("#pointcolor").change(function() {
		setPointColor(this.color);
	});
	// TODO amadu - connect this up (:
	// $('#colorpickerHolder').ColorPicker({flat: true});
});

function initPanel() {
	$("#allTime").addClass("selected");
	$(".displayFeatures").prop("checked", true);
}


function controller() {
	getTabEvents(function(objects) {
	  if (typeof objects == "undefined" || objects.length == 1) {
		noTabs();
	  } else {
	/*	var startTime = objects[0].time;
		var endTime = objects[objects.length-1].time;
		var numberofBins = 0;
		if ((endTime - startTime)/60 > 100) {
			numberofBins = 100;
		} else {
			numberofBins = Math.round((endTime - startTime)/60);
		}
		var points = listIterator(objects, numberofBins, startTime, endTime);
	*/	drawGraph(objects);
	  }
	});
}
