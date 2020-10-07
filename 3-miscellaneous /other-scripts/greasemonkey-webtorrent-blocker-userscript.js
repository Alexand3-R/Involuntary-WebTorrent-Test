// ==UserScript==
// @name     WebTorrent Blocker
// @version  1
// @grant    none
// ==/UserScript==

// Checks if typical names of WebTorrent objects are in object window using "unsafeWindow"
if ((typeof unsafeWindow.WebTorrent != "undefined") || (typeof unsafeWindow.client != "undefined")) {
	  // Prompts user to ask if WebTorrent user is allowed
	  if (confirm("WebTorrent Usage Detected! \nAllow file sharing?")) {
  		// Do nothing!
    } 
      else {
			// Close WebTorrent client using WebTorrent's destroy() function
    		if (unsafeWindow.cl){
        		unsafeWindow.cl.destroy();
        			}
        if (unsafeWindow.client){
        		unsafeWindow.client.destroy();
        			}
  		}
}

