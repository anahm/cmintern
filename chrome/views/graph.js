/*
 * graph.js
 *
 * actually draws the graph using <canvas> for html5
 */

function init() {
	canvas = document.getElementById("output");
	context = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;
}

var widthPadding = 100;
var heightPadding = 100;
var binGap = -1;

// variables for points
//var pointFillColor = document.getElementById("pointcolor").value;
var pointFillColor = "#0B5C8F";
var lineColor = "#0B5C8F";
// var lineColor = document.getElementById("linecolor").style.backgroundColor;
var radius = 4;
var showPoints = true;

// variables for lines
var lineWidth = 2;
var strokeStyle = "black";
var showLines = true;

// variables for filling
var showFilling = true;
var graphFillColor = '#b9d5ec';
var graphFillColorBase = '#b9d5ec'; 

var pointsSave;
var startTimeSave;
var endTimeSave;
var objectsSave;

function drawGraph(objects){
  if (typeof objects == "undefined" || objects.length == 1) {
	noTabs();
  } else {
	objectsSave = objects;
	if (typeof startTimeSave == "undefined") 
		startTimeSave = objects[0].time;
	if (typeof endTimeSave == "undefined") {
		var objectsLength = objects.length - 1;
		endTimeSave = objects[objectsLength].time;
	}
	var numberofBins = 0;
	if ((endTimeSave - startTimeSave)/60 > 100) {
		numberofBins = 100;
	} else {
		numberofBins = Math.round((endTimeSave - startTimeSave)/60);
	}
	if (numberofBins > 0) {
		pointsSave = listIterator(objects, numberofBins, startTimeSave, endTimeSave);

	  	if (showFilling) {	
			var lingrad = context.createLinearGradient(0,0,0,height);
			lingrad.addColorStop(0, '#fff');
   			lingrad.addColorStop(1, graphFillColorBase);
			setFillColor(lingrad);
  		}
		binGap = (width - widthPadding)/(pointsSave.length - 1);

		var pointsLen = pointsSave.length;
		var pixelPoints = convertToPixels(pointsSave, height, heightPadding);

		if (showFilling) {
			drawFill(pixelPoints);
		}
		drawExtraLabels(pointsSave, startTimeSave, endTimeSave);
    	drawGridLine(widthPadding/2, height - heightPadding/2, width - widthPadding/2, height - heightPadding/2, "#000");
   		drawGridLine(widthPadding/2, heightPadding/2 - 13, widthPadding/2, height - heightPadding/2, "#000");  

		for (i = 1; i < pointsLen; i++) {
			if (showLines) drawLine(pixelPoints[i - 1], pixelPoints[i], i);
			if (showPoints) drawPoint(i - 1, pixelPoints[i - 1]);
		}
		if (showPoints) drawPoint(pointsLen - 1, pixelPoints[pointsLen - 1]);
	} else {
		noTabs();
	}
  }
}

function drawExtraLabels(points, startTime, endTime) {
	// this is ali derping around with text. don't laugh please
	var extraYPadding = 13;
	var yAxisCoord = height - (heightPadding / 2) + extraYPadding;
	addXAxisLabels(points.length, startTime, endTime, yAxisCoord);

	// need to add because using top left corner of text
	var extraXPadding = 17;
	var largest = Math.max.apply(Math, points);
	var xAxisCoord = (widthPadding / 2) - extraXPadding;
	addYAxisLabels(largest, height, xAxisCoord);
}

// literally drawing a tiny circle
function drawPoint(binIndex, singlePoint) {
	if (binGap > 0) {
		context.fillStyle = pointFillColor;
		context.beginPath();
		context.arc(binIndex * binGap + widthPadding/2, singlePoint, radius, 0, 2*Math.PI, true)
		context.closePath();
		context.fill();
	} else
		alert("we hate you - draw point");
}

function drawLine(pointOne, pointTwo, binIndex) {
	if (binGap > 0) {
		context.beginPath();
		context.moveTo((binIndex - 1) * binGap + widthPadding/2, pointOne);
		context.lineTo(binIndex * binGap + widthPadding/2, pointTwo);
		context.strokeStyle = lineColor;
		context.lineWidth = lineWidth;
		context.stroke();
	} else
		alert("we hate you - draw line");
}

function drawFill(points) {
	if (binGap > 0) {
		context.beginPath();
		context.moveTo(widthPadding/2, height - heightPadding/2);
		var pointsLen = points.length;
		for (i = 0; i < pointsLen; i++) {
			context.lineTo(i * binGap + widthPadding/2, points[i]); 
	     }
		context.lineTo(width - widthPadding/2, height - heightPadding/2);
		context.closePath();
	//	context.lineWidth = 0;
		context.fillStyle = graphFillColor;
		context.fill();
		context.strokeStyle = graphFillColor;
		context.stroke();
	} else
		alert("we hate you - draw fill");
}

function setPointColor(color) {
	pointFillColor = "#" +color;
	drawGraph(objectsSave);
}

function setFillColor(color) {
	graphFillColor = color;
}

function noTabs() {
	var font = "11pt Calibri";
	var textColor = "#000000";
	context.font = font;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillStyle = textColor;
	context.fillText("Go open some tabs. :)", width/2, height/2);
}

function setShowPoints(show) {
	showPoints = show;
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGraph(objectsSave);
}

function setShowLines(show) {
	showLines = show;
		context.clearRect(0, 0, canvas.width, canvas.height);
	drawGraph(objectsSave);

}

function setShowFilling(show) {
	showFilling = show;
		context.clearRect(0, 0, canvas.width, canvas.height);
	drawGraph(objectsSave);

}

function getShowPoints() {
	return showPoints;
}

function getShowLines() {
	return showLines;
}

function getShowFilling() {
	return showFilling;
}

function setLineColor(color) {
	lineColor = "#" + color;
	drawGraph(objectsSave);
}

function setGraphFillColor(color) {
	graphFillColorBase = "#" +color;
	drawGraph(objectsSave);
}

function setStartTime(time) {
	startTimeSave = time;
	context.clearRect(0, 0, canvas.width, canvas.height);
	controller();
}

function getEndTime() {
	return endTimeSave;
}

function resetStartTime() {
	startTimeSave = objectsSave[0].time;
	context.clearRect(0, 0, canvas.width, canvas.height);
	controller();
}
