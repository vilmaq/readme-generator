// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const createFile = require("./utils/createFile");

// Create an array of questions for user input
const init = async () => {
  const answers = await inquirer.prompt(questions);
  const generateReadMeFile = generateMarkdown(answers);
  createFile(generateReadMeFile);
};

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   const markdown = generateMarkdown(answers);
// }

// // TODO: Create a function to initialize app
// const init = async () => {
//   const answers = await inquirer.prompt(questions);

//   console.log(answers);
// };

// Function call to initialize app
init();
