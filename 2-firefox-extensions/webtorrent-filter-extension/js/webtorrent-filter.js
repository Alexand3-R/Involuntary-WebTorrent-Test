// WebTorrent Filter

// Array of strings to filter
var detectionStrings = ['WEBTORRENT_ANNOUNCE']

// Function for creating a HTTP filter
function listener(details) {

  // Create stream filter object
  let filter = browser.webRequest.filterResponseData(details.requestId);

  // Create text encoder/decoder objects
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  // If filter detects strings, drop response
  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
	if (contains(str, detectionStrings)){
		filter.close()
	}
	else {
 // If filter does not detect string, pass response and disconnect filter
    	filter.disconnect();}
  }

  return {};
}

// Function for checking for specific string
function contains(target, pattern){
    var value = 0;
    pattern.forEach(function(word){
      value = value + target.includes(word);
    });
    return (value === 1)
}

// Listener function executes when a request is about to be made, and before headers are available
browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"], types: ["script"]},
  ["blocking"]
);
