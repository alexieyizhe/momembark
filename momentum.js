// Momentum Extension Event Page
(function () {

	if (chrome && chrome.runtime && chrome.runtime.setUninstallURL) {
		chrome.runtime.setUninstallURL("https://momentumdash.com/uninstall");
	}

	chrome.runtime.onInstalled.addListener(function (details) {
		if (details && details.reason && details.reason == 'install') chrome.tabs.create({url: "dashboard.html"});
	});

	chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.create({url: "dashboard.html"});
	});

})();