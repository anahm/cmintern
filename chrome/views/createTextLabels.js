/*
 * createTextLabels.js
 *
 * adding all of the labels and markers for the graph
 */

// basic variables
var font = "11pt Calibri";
var textColor = "#333";
var maxXShown = 20;
var maxYShown = 10;

var gridLineColor = "#DDDDDD";

// TODO add vertical and horiz lines
var showVerticalLines = true;
var showHorizLines = true;

/*
 * @param numBins = number of bins in chart
 * @param timeLabel = startTime (change value later)
 */
function addXAxisLabels(numBins, startTime, endTime, yCoord) {
	// init stuff
	var timeBinGap = (endTime - startTime) / numBins;
	context.font = font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = textColor;

	if (binGap > 0) {
		var frequency = parseInt(numBins / maxYShown);
        var wPadding = widthPadding / 2;
        var hPadding = heightPadding / 2;

        for (i = 0; i < numBins; i++) {
        	var xCoord = (i * binGap) + wPadding;
        	if (numBins < maxXShown || i % frequency == 0) {
        		printDate(xCoord, startTime, yCoord);
        		if (showVerticalLines)
					drawGridLine(xCoord, hPadding - 13,
							xCoord, height - hPadding, gridLineColor);
			}
        	startTime += timeBinGap;
        }
    } else
    	alert("we hate you.");
}

// yAxisCoord = "base" y coordinate of the axis
function printDate(xCoord, unixTime, yCoord) {
	var prettyTime = new Date(unixTime * 1000);
	var hours = prettyTime.getHours();
	var minutes = prettyTime.getMinutes();
	minutes = (minutes < 10) ? ("0" + minutes) : minutes;
	var prettyTimeLabel = hours + ':' + minutes;
	context.fillText(prettyTimeLabel, xCoord, yCoord);
}

function setFont(newFont) {
	font = newFont;
}

function addYAxisLabels(maxTabs, height, xCoord) {
	// basic initializations
	context.font = font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = textColor;

	var frequency = parseInt(maxTabs / maxYShown);
	var heightGap = (height - heightPadding) / maxTabs;
	var yCoord = heightPadding / 2;
	var wPadding = widthPadding / 2;

    for (i = maxTabs; i > 0; i--) {
    	if (maxTabs < maxYShown || i % frequency == 0) {
			context.fillText(i, xCoord, yCoord);
			if (showHorizLines)
				drawGridLine(wPadding, yCoord,
						width - wPadding, yCoord, gridLineColor);
		}
		yCoord += heightGap;
	}
}

function drawGridLine(startX, startY, endX, endY, color) {
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(endX, endY);
	context.strokeStyle = color;
	context.lineWidth = lineWidth;
	context.stroke();
}

function setMaxXShown(newMax) {
	maxXShown = newMax;
}

function setMaxYShown(newMax) {
	maxYShown = newMax;
}

function setShowVerticalLines(vLines) {
	showVerticalLines = vLines;
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGraph(pointsSave, startTimeSave, endTimeSave);
}

function setShowHorizLines(hLines) {
	showHorizLines = hLines;
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGraph(pointsSave, startTimeSave, endTimeSave);
}

function getShowVerticalLines() {
	return showVerticalLines;
}

function getShowHorizLines() {
	return showHorizLines;
}
