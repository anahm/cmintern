/*
 * createTextLabels.js
 *
 * adding all of the labels and markers for the graph
 */

// TODO change the yAxisCoord
var yAxisCoord = - (heightPadding / 2) + height;

// basic variables
var font = "11pt Calibri";
var textColor = "#000000";

/*
 * @param numBins = number of bins in chart
 * @param timeLabel = startTime (change value later)
 */
function addXAxisLabels(numBins, startTime, endTime) {
	if (binGap > 0) {
		var timeBinGap = (endTime - startTime) / numBins;
		context.font = font;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillColor = textColor;
        for (i = 0; i < numBins; i++) {
        	printDate((i * binGap), startTime);
        	startTime += timeBinGap;
        }
    } else
    	alert("we hate you.");
}

// yAxisCoord = "base" y coordinate of the axis
function printDate(xCoord, unixTime) {
	var prettyTime = new Date(unixTime * 1000);
	var hours = prettyTime.getHours();
	var minutes = prettyTime.getMinutes();
	var prettyTimeLabel = hours + ':' + minutes;
	context.fillText(prettyTimeLabel, xCoord, yAxisCoord);
}

function setFont(newFont) {
	font = newFont;
}
