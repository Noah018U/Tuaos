// This is file9.js for the aichat folder
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

// Define function to get random response from array of responses
function getRandomResponse(responses) {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

// Define function to load chatbot responses from file
function loadResponses() {
  const filePath = path.join(__dirname, 'responses.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Define main function for chatbot
async function chatbot() {
  console.log('Welcome to the AI chatbot!');
  const responses = loadResponses();
  while (true) {
    const userInput = await getUserInput('> ');
    const response = getRandomResponse(responses);
    console.log(response);
  }
}

// Call main function
chatbot();
