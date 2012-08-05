chrome.tabs.onCreated.addListener(function(tab) {
	writeTabEvent(true);
});
chrome.tabs.onRemoved.addListener(function(tab) {
	if(tab.url != null && tab.url != undefined) {
		writeTabEvent(false);
	}
});
