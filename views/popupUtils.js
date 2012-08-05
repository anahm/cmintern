/*
 * Helper methods
 */
function getCurrentTabsNum() {
	chrome.tabs.query({} /* get ALL the tabs! */, function(tabs) {
		$("#currentTabsNum").html(tabs.length);
	});
}

function getEventsNum() {
	getTabEvents(function(events) {
		$("#eventsNum").html(events.length);
	});
}