/*
 * createTextLabels.js
 *
 * adding all of the labels and markers for the graph
 */

// basic variables
var font = "11pt Calibri";

/*
 * @param numBins = number of bins in chart
 * @param timeLabel = startTime (change value later)
 */
function addXAxisLabels(numBins, unixTime) {
	if (binGap > 0) {
		context.font = font;
        context.textAlign = "center";
        context.textBaseline = "middle";
        for (i = 0; i < numBins; i++) {
        	printDate(i, unixTime);
        	unixTime += binGap;
        }
    } else
    	alert("we hate you.");
}

// yAxisCoord = "base" y coordinate of the axis
function printDate(xCoord, unixTime) {
	var prettyTime = new Date(timeLabel
	var prettyLabel = timeLabel(
	context.fillText(timeLabel, xCoord, yAxisCoord);
}

function setFont(newFont) {
	font = newFont;
}
