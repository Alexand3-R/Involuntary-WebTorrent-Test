
// Checks if typical names of WebTorrent objects are in object window using "wrappedJSObject"
if ((typeof window.wrappedJSObject.WebTorrent != "undefined") || (typeof window.wrappedJSObject.client != "undefined")) {
	  // Prompts user to ask if WebTorrent user is allowed
	  if (confirm("WebTorrent Usage Detected! \nAllow file sharing?")) {
	  		// Do nothing!
    } 
      else {
			// Close WebTorrent client using WebTorrent's destroy() function
			if (window.wrappedJSObject.WebTorrent){
				window.wrappedJSObject.WebTorrent = {};
					}        
			if (window.wrappedJSObject.cl){
				window.wrappedJSObject.cl.destroy();
					}
			if (window.wrappedJSObject.client){
				window.wrappedJSObject.client.destroy();
					}
  		}
}

// Rewrap object since unwrapping is transitive
XPCNativeWrapper(window.wrappedJSObject.WebTorrent);
