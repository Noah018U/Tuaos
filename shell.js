// Shell.js

// Import necessary modules
const fs = require('fs');
const readline = require('readline');
const { spawn } = require('child_process');

// Define shell prompt
const prompt = '> ';

// Define function to execute command
function executeCommand(command) {
  // Split command into arguments
  const args = command.split(' ');

  // Check if command is a built-in command
  switch (args[0]) {
    case 'cd':
      // Change directory
      try {
        process.chdir(args[1]);
      } catch (err) {
        console.error(`cd: ${args[1]}: No such file or directory`);
      }
      break;
    case 'ls':
      // List files in current directory
      fs.readdir('.', (err, files) => {
        if (err) throw err;
        files.forEach(file => {
          console.log(file);
        });
      });
      break;
    case 'cat':
      // Print contents of file
      fs.readFile(args[1], 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
      break;
    case 'mkdir':
      // Create new directory
      fs.mkdir(args[1], (err) => {
        if (err) throw err;
      });
      break;
    case 'rm':
      // Remove file or directory
      if (fs.existsSync(args[1])) {
        if (fs.lstatSync(args[1]).isDirectory()) {
          fs.rmdir(args[1], { recursive: true }, (err) => {
            if (err) throw err;
          });
        } else {
          fs.unlink(args[1], (err) => {
            if (err) throw err;
          });
        }
      } else {
        console.error(`rm: cannot remove '${args[1]}': No such file or directory`);
      }
      break;
    case 'echo':
      // Print message to console
      console.log(args.slice(1).join(' '));
      break;
    case 'calc':
      // Calculate expression using external calculator program
      const calc = spawn('calc', [args.slice(1).join(' ')]);
      calc.stdout.on('data', (data) => {
        console.log(`${data}`);
      });
      calc.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      break;
    default:
      // Execute command using child process
      const child = spawn(args[0], args.slice(1));
      child.stdout.on('data', (data) => {
        console.log(`${data}`);
      });
      child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      break;
  }
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: prompt
});

// Display prompt and wait for user input
rl.prompt();
rl.on('line', (line) => {
  // Execute command
  executeCommand(line.trim());

  // Display prompt again
  rl.prompt();
}).on('close', () => {
  // Exit shell on close
  process.exit(0);
});
