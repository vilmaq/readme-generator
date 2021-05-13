// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const createFile = require("./utils/createFile");

// Create an array of questions for user input
const init = async () => {
  const answers = await inquirer.prompt(questions);
  const generateReadMeFile = generateMarkdown(answers);
  createFile(generateReadMeFile);
};

init();
