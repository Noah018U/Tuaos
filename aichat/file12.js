// This is file12.js for the AI chatbot program
// It contains a function to generate a random greeting message

function generateGreeting() {
  const greetings = ["Hello", "Hi", "Hey", "Greetings", "Salutations"];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex] + ", how can I assist you today?";
}

module.exports = generateGreeting;
