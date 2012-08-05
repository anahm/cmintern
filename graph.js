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
var color = new jsColor("red");
var radius = 3;


function drawGraph(pixelPoints) {
	plotPoint(0, points[0]);
	var pointsLen = pixelPoints.length();
	for (int i = 1; i < pixelPointsLen; i++) {
		drawLine(points[0], pixelPoints[i]);
		plotPoint(i, pixelPoints[i]);
		if (shadeUnderneath) {
			drawFill(points[0], pixelPoints[i]);
		}
	}
}

// literally drawing a tiny circle
function plotPoint(binIndex, singlePoint) {
	context.beginPath();
	context.arc(binIndex, singlePoint)
	
	
}

function drawLine(pointOne, pointTwo) {
}

function drawFill(pointOne, pointTwo) {
}

function setColor(color) {
}
