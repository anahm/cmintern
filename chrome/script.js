getCurrentTabsNum();
function getCurrentTabsNum() {
	chrome.tabs.query({} /* get ALL the tabs! */, function(tabs) {
		document.getElementById("currentTabsNum").innerHTML = tabs.length;
	});
}