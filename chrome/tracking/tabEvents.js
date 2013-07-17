chrome.tabs.onCreated.addListener(function(tab) {
/*
	if(tab.url == null || tab.url == undefined || tab.url == "chrome://newtab/") {
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			alert("hello");
			if(tab.url != null && tab.url != undefined && tab.url == "chrome://newtab/") {
				alert("confirm");
				writeTabEvent(true);
				chrome.tabs.onUpdated.removeListener(function(success) { });	
			}
		});
	} else {
		writeTabEvent(true);
	}
*/
	getNumOfTabs(function(numOfTabs) {
		writeTabEvent(numOfTabs);
	});
});
chrome.tabs.onRemoved.addListener(function(tab) {
/*
	if(tab.url != null && tab.url != undefined) {
		writeTabEvent(false);
	}
*/
	getNumOfTabs(function(numOfTabs) {
		writeTabEvent(numOfTabs);
	});
});
