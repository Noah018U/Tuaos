// Code for aichat/file7.js

// This file contains the logic for the seventh file of the AI chatbot

// Import necessary modules
const fs = require('fs');
const path = require('path');

// Define the responses for this file
const responses = [
  "I'm not sure what you mean. Can you please rephrase your question?",
  "I'm sorry, I don't have an answer for that.",
  "I'm still learning and don't have an answer for that yet.",
  "I'm afraid I don't understand. Can you please provide more context?",
  "I'm sorry, I'm not programmed to answer that question.",
];

// Define the function to handle incoming messages
function handleMessage(message) {
  // Choose a random response from the list of responses
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  // Log the message and response to the console
  console.log(`User: ${message}`);
  console.log(`AI: ${response}`);
  
  // Append the message and response to the chat log file
  const chatLogFile = path.join(__dirname, '..', 'logs', 'chat.log');
  fs.appendFileSync(chatLogFile, `User: ${message}\n`);
  fs.appendFileSync(chatLogFile, `AI: ${response}\n`);
  
  // Return the response
  return response;
}

// Export the function to be used by the chatbot
module.exports = handleMessage;
