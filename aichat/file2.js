// This is the second file for the AI chatbot
// It contains functions for generating random responses

// Function to generate a random greeting
function generateGreeting() {
  const greetings = ["Hello", "Hi", "Hey", "Greetings"];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

// Function to generate a random question
function generateQuestion() {
  const questions = ["How are you?", "What's up?", "How's your day going?", "What are you up to?"];
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to generate a random response to a user message
function generateResponse(message) {
  const responses = ["Interesting", "Tell me more", "I see", "That's cool", "I'm not sure what you mean"];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return `${responses[randomIndex]}. ${generateQuestion()}`;
}

// Export the functions
module.exports = {
  generateGreeting,
  generateQuestion,
  generateResponse
};
