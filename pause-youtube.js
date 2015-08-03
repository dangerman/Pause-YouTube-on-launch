(function() {
	console.log("Trying to pause video...");
	var pauseButton = document.getElementsByClassName("ytp-play-button ytp-button")[0];
	if (typeof pauseButton != "undefined") {
		pauseButton.click();
		console.log("Paused YouTube video.");
	}
})();