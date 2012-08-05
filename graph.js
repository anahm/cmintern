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
var widthPadding = 10;
var heightPadding = 10;
var binGap = -1;
var shadeUnderneath = true;

// variables for points
var pointFillColor = "#8ED6FF";
var radius = 3;

// variables for lines
var lineWidth = 2;
var strokeStyle = "black";


function drawGraph(points) {
	binGap = (width - widthPadding)/points.length;
	var pointsLen = points.length;
	var pixelPoints = convertToPixels(points, height);
	drawPoint(0, pixelPoints[0]);
	for (i = 1; i < pointsLen; i++) {
		drawLine(pixelPoints[i - 1], pixelPoints[i], i);
		drawPoint(i, pixelPoints[i], i);
	}
	if (shadeUnderneath) {
		drawFill(pixelPoints);
	}
}

// literally drawing a tiny circle
function drawPoint(binIndex, singlePoint) {
	if (binGap > 0) {
		context.fillStyle = pointFillColor;
		context.beginPath();
		context.arc(binIndex * binGap, singlePoint, radius, 0, 2*Math.PI, true)
		context.closePath();
		context.fill();
	} else
		alert("we hate you");
}

function drawLine(pointOne, pointTwo, binIndex) {
	if (binGap > 0) {
		context.beginPath();
		context.moveTo((binIndex - 1) * binGap , pointOne);
		context.lineTo(binIndex * binGap , pointTwo);
		context.lineWidth = lineWidth;
		context.strokeStyle = pointFillColor;
		context.stroke();
	} else
		alert("we hate you");
}

function drawFill(points) {
	if (binGap > 0) {
		context.beginPath();
		context.moveTo(0, height - heightPadding/2);
		var pointsLen = points.length;
		for (i = 0; i < pointsLen; i++) {
			context.lineTo(i * binGap, points[i]); 
	    }
		context.lineTo(width - widthPadding/2, height - heightPadding/2);
		context.closePath();
		context.lineWidth = 0;
		context.fillStyle = graphFillColor;
		context.fill();
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
