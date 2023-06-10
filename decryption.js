// decryption.js

// This file contains functions for encryption and decryption of data.

// Function to decrypt data using a simple XOR cipher
function decryptXOR(data, key) {
  let decrypted = "";
  for (let i = 0; i < data.length; i++) {
    decrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return decrypted;
}

// Function to decrypt data using a Caesar cipher
function decryptCaesar(data, shift) {
  let decrypted = "";
  for (let i = 0; i < data.length; i++) {
    let charCode = data.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // uppercase letters
      charCode = ((charCode - 65 - shift) % 26 + 26) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase letters
      charCode = ((charCode - 97 - shift) % 26 + 26) % 26 + 97;
    }
    decrypted += String.fromCharCode(charCode);
  }
  return decrypted;
}

// Export the functions for use in other modules
module.exports = {
  decryptXOR,
  decryptCaesar
};
