/*
 * graph.js
 *
 * actually draws the graph using <canvas> for html5
 */

// creating jsGraphics object
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var shadeUnderneath = false;

// variables for points
var pointFillColor = "#8ED6FF";
var radius = 3;

// variables for lines
var lineWidth = 2;

function drawGraph(pixelPoints) {
	plotPoint(0, points[0]);
	var pointsLen = pixelPoints.length();
	for (int i = 1; i < pixelPointsLen; i++) {
		drawLine(pixelPoints[i - 1], pixelPoints[i], i);
		plotPoint(i, pixelPoints[i], i);
		if (shadeUnderneath) {
			drawFill(pixelPoints[i - 1], pixelPoints[i], i);
		}
	}
	if (shadeUnderneath) {
		drawFill(pixelPoints);
	}
}

// literally drawing a tiny circle
function plotPoint(binIndex, singlePoint) {
	context.fillStyle = color;
	context.beginPath();
	context.arc(binIndex * binGap, singlePoint, radius, 0, 2*Math.PI, true)
	context.closePath();
	context.fill();
}

function drawLine(pointOne, pointTwo, binIndex) {
	context.beginPath();
	context.moveTo(binIndex * binGap , pointOne);
	context.lineTo(binIndex * binGap , pointTwo);
	context.lineWidth = lineWidth;
	context.strokeStyle = color;
	context.stroke();
}

function drawFill(points) {
	context.beginPath();
	context.moveTo(0, points[0]);
	var pointsLen = pixelPoints.length();
	for (int i = 1; i < pointsLen; i++) {
		context.lineTo(i * binGap, points[i]); 
	}
	context.closePath();
	context.lineWidth = 0;
	context.fillStyle = fillColor;
	context.fill();
	context.stroke();
}

function setColor(color) {
}
