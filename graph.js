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

var binGap = -1;
var shadeUnderneath = false;

// variables for points
var pointFillColor = "#8ED6FF";
var radius = 3;

// variables for lines
var lineWidth = 2;
var strokeStyle = "black";


function drawGraph(pixelPoints) {
	binGap = width/pixelPoints.length();
	var pointsLen = pixelPoints.length();
	var pixelPoints = convertToPixels(pixelPoints, height);
	drawPoint(0, pixelPoints[0]);
	for (i = 1; i < pixelPointsLen; i++) {
		drawLine(pixelPoints[i - 1], pixelPoints[i], i);
		drawPoint(i, pixelPoints[i], i);
		if (shadeUnderneath) {
			drawFill(pixelPoints[i - 1], pixelPoints[i], i);
		}
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
		context.moveTo(binIndex * binGap , pointOne);
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
		context.moveTo(0, points[0]);
		var pointsLen = pixelPoints.length();
		for (i = 1; i < pointsLen; i++) {
			context.lineTo(i * binGap, points[i]); 
		}
		context.closePath();
		context.lineWidth = 0;
		context.fillStyle = pointFillColor;
		context.fill();
		context.stroke();
	} else
		alert("we hate you");
}

function setColor(color) {
	pointFillColor = color;
}
