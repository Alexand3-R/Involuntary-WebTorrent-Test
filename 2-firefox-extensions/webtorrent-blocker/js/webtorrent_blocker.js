// WebTorrent Blocker

// Path to toolbar icons
const enabledPath = 'images/safe-64.png';
const disabledPath = 'images/unsafe-64.png';

// Button status string
const enabledInfo = 'WebTorrent Blocker is enabled';
const disabledInfo = 'WebTorrent Blocker is disabled';
var registered = null;

// Function to register and utilise userscript
async function register(){
  registered = await browser.contentScripts.register({js: [{file: 'js/script.js'}],matches: ['<all_urls>']});
}

// Function to toggle on and off blocker
function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
    browser.browserAction.setTitle({title: disabledInfo });
    browser.browserAction.setIcon({path: disabledPath });
    console.log("WebTorrent Blocker is disabled!");
  } else {
    register();
    browser.browserAction.setTitle({title: enabledInfo });
    browser.browserAction.setIcon({path: enabledPath });
    console.log("WebTorrent Blocker is enabled!");
  }
}

// Enable blocker at start of browser
toggle();

// Runs toggle function upon extension button click
browser.browserAction.onClicked.addListener(toggle);
