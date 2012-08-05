function writeTabEvent(numOfTabs) {
	getTabEventsToWrite({time: getCurrentTime(), tabs: numOfTabs}, function(events) {
		chrome.storage.local.set({
			events: events
		}, function() {
		});
	});
}

function getTabEventsToWrite(eventToWrite, callback) {
	getTabEvents(function(events) {
		if(events == null || events == undefined) {
			events = [eventToWrite];
			callback(events);
		} else {
			events[events.length] = eventToWrite;
			console.log(events);
			callback(events);
		}
	});
}

function getTabEvents(callback) {
	chrome.storage.local.get("events", function(items) {
		callback(items.events);
	});
}

function getCurrentTime() {
	// returns unix timestamp in seconds.
	var d = new Date();
	return parseInt(d.getTime() / 1000);
}

function getNumOfTabs(callback) {
	chrome.tabs.query({} /* get ALL the tabs! */, function(tabs) {
		callback(tabs.length);
	});
}