const inquirer = require("inquirer");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  //destruct the answers object and pull out the respective keys
  const {
    applicationTitle,
    applicationDescription,
    applicationBadge,
    applicationLicense,
    installationInstructions,
    usageInfo,
    testInformation,
    contributingGuidelines,
    screenshot,
    gitRepo,
    gitURL,
    email,
  } = answers;
  return `
  # ${applicationTitle}
  ${applicationTitle}
  ![${applicationLicense} license](https://img.shields.io/badge/license-MIT-green) 
  
  ## Description of Application
  ${applicationDescription}
  
  ## Table of Contents
  - [Application Title](#application-title)
    - [Description](#description-of-application)
    - [Installation Instructions](#installation-instructions)
    - [Badge](#badge)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ##Badge
  ${applicationBadge}

  ##License 
  ${applicationLicense}


  ## Installation Instructions
  ${installationInstructions}


  ##Usage
  ${usageInfo}


  
  ## Contributing
  ${contributingGuidelines}
  
  ## Tests
  ${testInformation}
  
  ## Screenshots 
  ${screenshot}


  ## Github 
  - [Github Project Repository](${gitRepo}) 
  - [Github Project URL](${gitURL}) 

  ## Contact
  If you have any questions about the repo, open an issue or contact me directly at ${email}. `;
};

module.exports = generateMarkdown;
