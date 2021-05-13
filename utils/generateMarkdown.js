const inquirer = require("inquirer");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  // Create a function that returns the license link

  if (license !== "None") {
    return `
  https://img.shields.io/badge/license-${license}-green
`;
    // If there is no license, return an empty string
  } else {
    return "";
  }
};

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
const renderLicenseSection = (license) => {
  const licenseLink = renderLicenseLink(license);
  if (license !== "None") {
    return `
  This project is licensed under the  [${license}](${licenseLink}) license.
  `;
  }
};
// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
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

  const applicationBadge = renderLicenseBadge(applicationLicense);
  const licenseSection = renderLicenseSection(applicationLicense);
  const instaInstructions = installationInstructions.replace(",", "\n");
  return `
  # ${applicationTitle}
  ${applicationTitle} ![${applicationLicense} license](${applicationBadge})
  
  ## Description
  ${applicationDescription}
  
  ## Table of Contents
  - [Application Title](#application-title)
    - [Description](#description-of-application)
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
  ${instaInstructions}
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
  - [README link](./output/README.md)
  

  ## Contact
  If you have any questions about the repo, open an issue or contact me directly at ${email}. `;
};

module.exports = generateMarkdown;
