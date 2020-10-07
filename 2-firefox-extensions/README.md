### <u>webtorrent-background-seeder</u>

<u></u>Firefox extension that uses a background script to run a WebTorrent client in the background as long as the browser is active. The extension downloads and then seeds the same file. This proves that it could be useful as a means of resource hijacking, since the background code can also be inserted in a benign established browser extension.

### <u>webtorrent-blocker</u>

Firefox extension that uses a background script and content script which together try to detect and block the usage of the WebTorrent library. It does this by checking the object *Window* for common names of WebTorrent objects.

### <u>webtorrent-filter-extension</u>

<u></u>Firefox extension that uses a background script filter all browser responses that contain JavaScript files. It searches for pieces of text that is commonly only used in the WebTorrent libary and then blocks the response if the library is detected. This may slow the browser down and may break load events in some HTML documents due to a [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1561604) in the *webRequest.filterResponseData* API.
