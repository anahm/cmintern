getCurrentTabsNum();
function getCurrentTabsNum() {
	chrome.tabs.query({} /* get ALL the tabs! */, function(tabs) {
		document.getElementById("currentTabsNum").innerHTML = tabs.length;
	});
}

chrome.tabs.onCreated.addListener(function(tab) {
	writeTabEvent(true);
});