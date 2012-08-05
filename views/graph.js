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
	setColor("#3ED6FF");
	setFillColor("#8ED6FF");
}

var widthPadding = 100;
var heightPadding = 100;
var binGap = -1;
var shadeUnderneath = true;

// variables for points
var pointFillColor = "#8ED6FF";
var radius = 4;

// variables for lines
var lineWidth = 2;
var strokeStyle = "black";


function drawGraph(points) {
	binGap = (width - widthPadding)/(points.length - 1);
	var pointsLen = points.length;
	var pixelPoints = convertToPixels(points, height, heightPadding);
	drawPoint(0, pixelPoints[0]);
	if (shadeUnderneath) {
		drawFill(pixelPoints);
	}
	for (i = 1; i < pointsLen; i++) {
		drawLine(pixelPoints[i - 1], pixelPoints[i], i);
		drawPoint(i, pixelPoints[i], i);
	}

	// this is ali derping around with text. don't laugh please
	addXAxisLabels(pointsLen, startTime, endTime, yAxisCoord);
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
		alert("we hate you");
}

function drawLine(pointOne, pointTwo, binIndex) {
	if (binGap > 0) {
		context.beginPath();i
		context.moveTo((binIndex - 1) * binGap + widthPadding/2, pointOne);
		context.lineTo(binIndex * binGap + widthPadding/2, pointTwo);
		context.strokeStyle = pointFillColor;
		context.lineWidth = 5;
		context.stroke();
	} else
		alert("we hate you");
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
		alert("we hate you");
}

function setColor(color) {
	pointFillColor = color;
}

function setFillColor(color) {
	graphFillColor = color;
}
