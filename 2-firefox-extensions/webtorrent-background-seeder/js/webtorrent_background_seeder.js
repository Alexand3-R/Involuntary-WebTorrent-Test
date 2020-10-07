// WebTorrent Background Seeder

// Path to toolbar icons
const enabledPath = 'images/safe-64.png';
const disabledPath = 'images/unsafe-64.png';

// Button status string
const enabledInfo = 'WebTorrent Seeding is active!';
const disabledInfo = 'WebTorrent Seeding is disabled!';

// Create new instance of WebTorrent client
var cl = new WebTorrent();

// Check used for button logic
var check = false;

// Function to download and seed WebTorrent
async function seed(){
   cl.add(torrentId);
  }

// Function to toggle on and off seeding
function toggle() {
  if (check) {
	  cl.destroy()
    browser.browserAction.setTitle({title: disabledInfo });
    browser.browserAction.setIcon({path: disabledPath });
    console.log("WebTorrent Seeding is disabled!");
    check = false;
    cl = new WebTorrent(); }
  else {
    seed();
    browser.browserAction.setTitle({title: enabledInfo });
    browser.browserAction.setIcon({path: enabledPath });
    console.log("WebTorrent Seeding is active!");
    check = true;
  }
}

// Enable seeding at start of browser
toggle();

// Runs toggle function upon extension button click
browser.browserAction.onClicked.addListener(toggle);
