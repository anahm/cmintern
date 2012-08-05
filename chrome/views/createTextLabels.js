/*
 * createTextLabels.js
 *
 * adding all of the labels and markers for the graph
 */

// basic variables
var font = "11pt Calibri";
var textColor = "#000000";

/*
 * @param numBins = number of bins in chart
 * @param timeLabel = startTime (change value later)
 */
function addXAxisLabels(numBins, startTime, endTime, yCoord) {
	if (binGap > 0) {
		var timeBinGap = (endTime - startTime) / numBins;
		context.font = font;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillColor = textColor;
        for (i = 0; i < numBins; i++) {
        	printDate((i * binGap), startTime, yCoord);
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
	var prettyTimeLabel = hours + ':' + minutes;
	context.fillText(prettyTimeLabel, xCoord, yCoord);
}

function setFont(newFont) {
	font = newFont;
}

function addYAxisLabels(maxTabs, height, xCoord) {
	var heightGap = height / maxTabs;
}

