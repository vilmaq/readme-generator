const inquirer = require("inquirer");

const renderLicenseLink = (license) => {
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE_2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL_3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "BSD_3":
      return "https://opensource.org/licenses/BSD-3-Clause";

    default:
      return "";
  }
};

const generateMarkdown = (answers) => {
  //destruct the answers object and pull out the respective keys
  const {
    applicationTitle,
    applicationDescription,
    applicationLicense,
    installationInstructions,
    usageInfo,
    testInformation,
    contributingGuidelines,
    screenshot,
    gitRepo,
    gitUsername,
    email,
  } = answers;

  const applicationBadge =
    applicationLicense !== "None"
      ? `https://img.shields.io/badge/license-${applicationLicense}-green`
      : "";

  const licenseLink = renderLicenseLink(applicationLicense);
  const licenseSection =
    applicationLicense !== "None"
      ? `
  This project is licensed under the  [${applicationLicense}](${licenseLink}) license.`
      : "";

  const installationInstruct = installationInstructions.replace(",", "\n");

  return `
  # ${applicationTitle} ![${applicationLicense} license](${applicationBadge})
  
  ## Description
  ${applicationDescription}
  
  ## Table of Contents
  - [Application Title](#application-title)
    - [Description](#description)
    - [Installation Instructions](#installation-instructions)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Contact](#contact)
  



  ## License

  ${licenseSection}


  ## Installation Instructions
  \`\`\`
  ${installationInstruct}
  \`\`\`


  ## Usage
  ${usageInfo}

  
  ## Contributing
  ${contributingGuidelines}

  
  ## Tests
  ${testInformation}

  
  ## Screenshots 
  ![Screenshot from the application](./../assets/images/${screenshot})


  ## Github 
  - [Github Project Repository](${gitRepo}) 
  - [Github Project URL](${gitUsername}) 
  - [README link](https://github.com/vilmaq/readme-generator/tree/master/docs) 
      The generated README file can be found inside the docs directory 

  ## Contact
  If you have any questions about the repo, open an issue or contact me directly at ${email}. `;
};

module.exports = generateMarkdown;
