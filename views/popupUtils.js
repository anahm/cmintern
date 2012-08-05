/*
 * Helper methods
 */
function getCurrentTabsNum() {
	chrome.tabs.query({} /* get ALL the tabs! */, function(tabs) {
		document.getElementById("currentTabsNum").innerHTML = tabs.length;
	});
}

function getEventsNum() {
	getTabEvents(function(events) {
		document.getElementById("eventsNum").innerHTML = events.length;
	});
}