chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({lat: 0.0, lon: 0.0}, () => {
		console.log('location set');
	});
});