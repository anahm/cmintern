/*
 * Inits
 */
getCurrentTabsNum();
getEventsNum();

//document.getElementById('testlink').onclick = writeTabEvent(true);
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});


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

function writeTabEvent(created) {
	getTabEventsToWrite({time: getCurrentTime(), created: created}, function(events) {
		chrome.storage.sync.set({
			events: events
		}, function() {
		});
	});
}

function getTabEventsToWrite(eventToWrite, callback) {
	getTabEvents(function(events) {
		if(events == null || events == undefined) {
			console.log("Hello");
			events = [eventToWrite];
			callback(events);
		} else {
			console.log("Bye");
			events[events.length] = eventToWrite;
			console.log(events);
			callback(events);
		}
	});
}

function getTabEvents(callback) {
	chrome.storage.sync.get("events", function(items) {
		console.log(items.events);
		callback(items.events);
	});
}

function getCurrentTime() {
	// returns unix timestamp in seconds.
	var d = new Date();
	return parseInt(d.getTime() / 1000);
}
chrome.tabs.onCreated.addListener(function(tab) {
	writeTabEvent(true);
});