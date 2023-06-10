// This file contains the code for the desktop of the Tuaos OS

// Import necessary modules
import { openApp } from './shell.js';
import { getIcons } from './icons.js';

// Define the desktop object
const desktop = {
  // List of icons on the desktop
  icons: getIcons(),
  
  // Function to open an app when an icon is clicked
  openApp: function(appName) {
    openApp(appName);
  }
};

// Export the desktop object
export { desktop };
