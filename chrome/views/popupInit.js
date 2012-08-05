/*
 * Inits
 */
$(document).ready(function() {
	getCurrentTabsNum();
	getEventsNum();
	$("#graphButton").click(function() {
			chrome.tabs.create({url: "views/index.html"}, function() { });
	});
});

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