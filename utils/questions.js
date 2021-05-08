//Declare the array of questions

const questions = [
  {
    type: "input",
    message: "Please type your Project Title:",
    name: "applicationTitle",
  },
  {
    type: "input",
    message: "Please choose a Badge:",
    name: "applicationBadge",
  },
  {
    type: "input",
    message: "Please enter a description for your project:",
    name: "applicationDescription",
  },
  {
    type: "list",
    message: "Please choose a licence for your project",
    name: "applicationLicense",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  },
  {
    type: "input",
    message: "Enter the Installation Instructions for this application:",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Enter Usage Information:",
    name: "usageInfo",
  },

  {
    type: "input",
    message: "Enter Contributing guidelines:",
    name: "contributingGuidelines",
  },
  {
    type: "confirm",
    message: "Did you run any test:",
    name: "confirmTests",
  },
  {
    type: "input",
    message: "What tests did you perform:",
    when: function (answers) {
      return answers.confirmTests;
    },
    name: "testInformation",
  },
  {
    type: "input",
    message:
      "Enter the file name and extension of the screenshot of the app (in the ./assets/images folder):",
    name: "screenshot",
  },
  {
    type: "input",
    message: "Enter GitHub Repository Link:",
    name: "gitRepo",
  },
  {
    type: "input",
    message: "Enter GitHub Site Link:",
    name: "gitURL",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
];

// Export the questions array to be used externally
module.exports = questions;
