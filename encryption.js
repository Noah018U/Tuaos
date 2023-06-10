// Encryption code for Tuaos OS

// Function to encrypt a string using a simple substitution cipher
function encryptString(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "qwertyuiopasdfghjklzxcvbnm";
  let encryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      encryptedStr += cipher[index];
    } else {
      encryptedStr += char;
    }
  }
  return encryptedStr;
}

// Function to decrypt a string using a simple substitution cipher
function decryptString(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "qwertyuiopasdfghjklzxcvbnm";
  let decryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const index = cipher.indexOf(char);
    if (index !== -1) {
      decryptedStr += alphabet[index];
    } else {
      decryptedStr += char;
    }
  }
  return decryptedStr;
}

// Export the functions for use in other parts of the OS
module.exports = {
  encryptString,
  decryptString
};
