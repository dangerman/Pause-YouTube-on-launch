var launchedTabIds = [];

chrome.runtime.onStartup.addListener(populateListOfYouTubeTabs);
chrome.tabs.onUpdated.addListener(pauseVideoInLaunchedTab);

function populateListOfYouTubeTabs() {
	console.log("Finding YouTube tabs...");
	chrome.tabs.query({"url": "https://www.youtube.com/watch*"}, function(tabs) {
		console.log("Found", tabs.length, "YouTube tabs.");
		
		launchedTabIds = tabs.map(function(t) {return t.id});
	});	
}

function pauseVideoInLaunchedTab(tabId, changeInfo, tab) {
	if ((changeInfo.status != "complete") || (launchedTabIds.indexOf(tab.id)<0)) {
		return;
	}
	console.log("Pausing video: ", tab.title);
	
	chrome.tabs.executeScript(tab.id,
		{file: "pause-youtube.js", runAt: "document_end"},
		function() {console.log("Ran script on page: ", tab.title)});	
}