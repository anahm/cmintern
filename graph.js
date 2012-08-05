/*
 * graph.js
 *
 * actually draws the graph using <canvas> for html5
 */

// creating jsGraphics object
var gr = new jsgraphics(document.getElementById("canvas");
var color = new jsColor("red");
var shadeUnderneath = false;

function drawGraph(points) {
	plotPoint(points[0]);
	var pointsLen = points.length();
	for (int i = 1; i < pointsLen; i++) {
		drawLine(points[0], points[i], shadeUnderneath);
		plotPoint(points[i]);
	}
}

// literally drawing a tiny circle
function plotPoint(singlePoint) {
	
	
}

function drawLine(pointOne, pointTwo, shadeUnderneath) {
	
}

function setColor(color) {
}
