// This is the code for aichat/file5.js

// Import necessary modules
const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'file5.js');

// Define the chatbot function
function chatbot() {
  console.log('Hello, I am chatbot number 5!');
}

// Export the chatbot function
module.exports = chatbot;

// Write the file to disk
fs.writeFile(filePath, chatbot.toString(), (err) => {
  if (err) throw err;
  console.log('aichat/file5.js has been saved!');
});
