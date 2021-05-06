//Declare the array of questions
const questions = [
  {
    type: "input",
    message: "Please type your Project Title:",
    name: "applicationTitle",
  },
  // {
  //   type: "list",
  //   message: "Please choose a Badge:",
  //   name: ["MIT", "Apache", "GPL", "BSD", "none"],
  // },
  {
    type: "input",
    message: "Please enter a description for your project:",
    name: "applicationDescription",
  },
  // {
  //   type: "list",
  //   message: "Please choose a License:",
  //   name: ["MIT", "Apache", "GPL", "BSD", "none"],
  // },
  {
    type: "input",
    message: "Enter the Installation Instructions for this applications:",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Enter Usage Information:",
    name: "usageInfo",
  },

  {
    type: "input",
    message: "Enter Contributing guidelines",
    name: "contributingGuidelines",
  },
  // {
  //   type: "list",
  //   message: "Did you run any test",
  //   name: ["Y", "N"],
  // },
  {
    type: "input",
    message:
      "Enter the file name and extension of the screenshot of the app (in the ./assets/images folder)",
    name: "screenshot",
  },
  {
    type: "input",
    message: "Enter GitHub Repository Link",
    name: "gitRepo",
  },
  {
    type: "input",
    message: "Enter GitHub Site Link",
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
