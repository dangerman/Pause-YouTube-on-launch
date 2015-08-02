(function() {
	console.log("Trying to pause video...");
	var pauseButton = document.getElementsByClassName("ytp-button ytp-button-pause")[0];
	if (typeof pauseButton != "undefined") {
		pauseButton.click();
		console.log("Paused YouTube video.")
	}
})();