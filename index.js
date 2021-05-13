const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const createFile = require("./utils/createFile");

const init = async () => {
  const answers = await inquirer.prompt(questions);
  const generateReadMeFile = generateMarkdown(answers);
  createFile(generateReadMeFile);
};

init();
