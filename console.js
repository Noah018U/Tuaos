// This file contains the code for the console terminal system driver

// Import necessary modules
import { FileSystem } from './filesystem';
import { KeyboardDriver } from './keyboard';
import { MouseDriver } from './mouse';
import { DisplayDriver } from './display';
import { Dictionary } from './dictionary';

// Define the Console class
export class Console {
  // Initialize the Console class
  constructor() {
    // Initialize the file system
    this.fileSystem = new FileSystem();

    // Initialize the keyboard driver
    this.keyboardDriver = new KeyboardDriver();

    // Initialize the mouse driver
    this.mouseDriver = new MouseDriver();

    // Initialize the display driver
    this.displayDriver = new DisplayDriver();

    // Initialize the dictionary
    this.dictionary = new Dictionary();
  }

  // Method to start the console
  start() {
    // Display the welcome message
    this.displayDriver.print('Welcome to Tuaos Console Terminal System!');

    // Display the prompt
    this.displayDriver.print('>');
    
    // Listen for keyboard input
    this.keyboardDriver.listen((input) => {
      // Handle the input
      this.handleInput(input);
    });
  }

  // Method to handle the input
  handleInput(input) {
    // Check if the input is a command
    if (input.startsWith('/')) {
      // Handle the command
      this.handleCommand(input);
    } else {
      // Handle the text input
      this.handleText(input);
    }
  }

  // Method to handle a command
  handleCommand(command) {
    // Split the command into parts
    const parts = command.split(' ');

    // Get the command name
    const name = parts[0].substring(1);

    // Get the arguments
    const args = parts.slice(1);

    // Check the command name
    switch (name) {
      case 'help':
        // Display the help message
        this.displayDriver.print('Available commands:');
        this.displayDriver.print('/help - Display this help message');
        this.displayDriver.print('/ls - List the files in the current directory');
        this.displayDriver.print('/cd - Change the current directory');
        this.displayDriver.print('/cat - Display the contents of a file');
        this.displayDriver.print('/mkdir - Create a new directory');
        this.displayDriver.print('/touch - Create a new file');
        break;
      case 'ls':
        // List the files in the current directory
        const files = this.fileSystem.listFiles();
        this.displayDriver.print(files.join('\n'));
        break;
      case 'cd':
        // Change the current directory
        const success = this.fileSystem.changeDirectory(args[0]);
        if (!success) {
          this.displayDriver.print(`Error: Directory '${args[0]}' not found`);
        }
        break;
      case 'cat':
        // Display the contents of a file
        const contents = this.fileSystem.readFile(args[0]);
        if (contents === null) {
          this.displayDriver.print(`Error: File '${args[0]}' not found`);
        } else {
          this.displayDriver.print(contents);
        }
        break;
      case 'mkdir':
        // Create a new directory
        const result = this.fileSystem.createDirectory(args[0]);
        if (!result) {
          this.displayDriver.print(`Error: Directory '${args[0]}' already exists`);
        }
        break;
      case 'touch':
        // Create a new file
        const created = this.fileSystem.createFile(args[0]);
        if (!created) {
          this.displayDriver.print(`Error: File '${args[0]}' already exists`);
        }
        break;
      default:
        // Display an error message
        this.displayDriver.print(`Error: Command '${name}' not found`);
        break;
    }

    // Display the prompt
    this.displayDriver.print('>');
  }

  // Method to handle text input
  handleText(text) {
    // Correct the text using the dictionary
    const corrected = this.dictionary.correct(text);

    // Display the corrected text
    this.displayDriver.print(corrected);

    // Display the prompt
    this.displayDriver.print('>');
  }
}
