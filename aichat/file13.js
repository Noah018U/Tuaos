// This is file13.js for the aichat folder
// It is part of the Tuaos operating system project
// Created by Noah018

// This file contains code for the AI chatbot

const responses = [
  "Hello, how can I help you today?",
  "What brings you here?",
  "How can I assist you?",
  "I'm here to help. What do you need?",
  "What can I do for you today?",
  "How can I be of service?",
  "What's on your mind?",
  "How can I make your day better?",
  "What do you need help with?",
  "What can I do to assist you?",
  "How can I help you today?",
  "What's up?",
  "What's on your agenda today?",
  "What can I do for you right now?",
  "How can I be of assistance?",
];

function getRandomResponse() {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

module.exports = {
  getRandomResponse,
};
