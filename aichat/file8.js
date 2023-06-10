// This is file8.js for the aichat folder
// It contains code for the AI chatbot

// Import necessary modules
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Define function to read user input from console
function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(prompt, ans => {
    rl.close();
    resolve(ans);
  }));
}

// Define function to get random response from list of responses
function getRandomResponse(responses) {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

// Define function to load responses from file
function loadResponsesFromFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents.split('\n').filter(line => line.trim() !== '');
}

// Define function to start chatbot
async function startChatbot() {
  // Load responses from file
  const responsesFilePath = path.join(__dirname, 'responses.txt');
  const responses = loadResponsesFromFile(responsesFilePath);

  // Start chat loop
  while (true) {
    // Get user input
    const userInput = await getUserInput('> ');

    // Check for exit command
    if (userInput.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      break;
    }

    // Get random response and output to console
    const response = getRandomResponse(responses);
    console.log(response);
  }
}

// Export startChatbot function
module.exports = {
  startChatbot
};
