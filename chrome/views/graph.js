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
	
	setColor("#3aa5ff");
	
	var lingrad = context.createLinearGradient(0,0,0,height);
    lingrad.addColorStop(0, '#fff');
    lingrad.addColorStop(1, '#b9d5ec');
	setFillColor(lingrad);
}

var widthPadding = 100;
var heightPadding = 100;
var binGap = -1;
var shadeUnderneath = true;

// variables for points
var pointFillColor = "#8ED6FF";
var lineColor = "#b9d5ec";
var radius = 4;

// variables for lines
var lineWidth = 2;
var strokeStyle = "black";


function drawGraph(points, startTime, endTime){
	binGap = (width - widthPadding)/(points.length - 1);

	var pointsLen = points.length;
	var pixelPoints = convertToPixels(points, height, heightPadding);

	if (shadeUnderneath) {
		drawFill(pixelPoints);
	}
	var drawLabels = true;
	if (drawLabels) {
		drawExtraLabels(points, startTime, endTime);
	}

	for (i = 1; i < pointsLen; i++) {
		drawLine(pixelPoints[i - 1], pixelPoints[i], i);
		drawPoint(i - 1, pixelPoints[i - 1]);
	}

	drawPoint(pointsLen - 1, pixelPoints[pointsLen - 1]);
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

function setColor(color) {
	pointFillColor = color;
}

function setFillColor(color) {
	graphFillColor = color;
}
