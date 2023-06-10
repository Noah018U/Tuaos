// Taskbar.js

// This file contains the code for the taskbar in the Tuaos OS.

// Import necessary modules
const { openWindow } = require('./desktop');
const { getUsers, getCurrentUser } = require('./users');

// Define taskbar class
class Taskbar {
  constructor() {
    this.taskbar = document.createElement('div');
    this.taskbar.classList.add('taskbar');

    // Add start button
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';
    startButton.addEventListener('click', () => {
      openWindow('start-menu');
    });
    this.taskbar.appendChild(startButton);

    // Add user button
    const userButton = document.createElement('button');
    userButton.classList.add('user-button');
    userButton.innerText = getCurrentUser();
    userButton.addEventListener('click', () => {
      openWindow('user-menu');
    });
    this.taskbar.appendChild(userButton);

    // Add task list
    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');
    this.taskbar.appendChild(taskList);

    // Add taskbar to document
    document.body.appendChild(this.taskbar);
  }

  // Add task to task list
  addTask(task) {
    const taskList = this.taskbar.querySelector('.task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
  }

  // Remove task from task list
  removeTask(task) {
    const taskList = this.taskbar.querySelector('.task-list');
    const taskItem = taskList.querySelector(`li[data-task="${task}"]`);
    taskList.removeChild(taskItem);
  }

  // Update user button text
  updateUserButton() {
    const userButton = this.taskbar.querySelector('.user-button');
    userButton.innerText = getCurrentUser();
  }

  // Update user list
  updateUserList() {
    const userList = document.createElement('ul');
    userList.classList.add('user-list');
    const users = getUsers();
    users.forEach((user) => {
      const userItem = document.createElement('li');
      userItem.classList.add('user-item');
      userItem.innerText = user;
      userItem.addEventListener('click', () => {
        openWindow('login', { user });
      });
      userList.appendChild(userItem);
    });
    openWindow('user-menu', { content: userList });
  }
}

// Export taskbar instance
module.exports = new Taskbar();
