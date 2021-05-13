const inquirer = require("inquirer");

const renderLicenseBadge = (license) =>
  license !== "None"
    ? `https://img.shields.io/badge/license-${license}-green`
    : "";

const renderLicenseLink = (license) => {
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

const renderLicenseSection = (license) =>
  license !== "None"
    ? `This project is licensed under the  [${license}](${renderLicenseLink(
        license
      )}) license.`
    : "";

const generateMarkdown = (answers) => {
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
  const installInstructions = installationInstructions.replace(",", "\n");

  return `
  # ${applicationTitle}
  ![${applicationLicense} license](${applicationBadge})
  
  ## Description
  ${applicationDescription}
  
  ## Table of Contents
  - [Application Title](#application-title)
    - [Description](#description)
    - [License](#license)
    - [Installation Instructions](#installation-instructions)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Screenshots](#screenshots)
    - [Github](#github)
    - [Contact](#contact)
  
  ## License

  ${licenseSection}

  ## Installation Instructions
  \`\`\`
  ${installInstructions}
  \`\`\`

  ## Usage
  ${usageInfo}

  ## Contributing
  ${contributingGuidelines}
  
  ## Tests
  ${testInformation}
  
  ## Screenshots 
  ![Screenshot from the application](./assets/images/${screenshot})

  ## Github 
  - [Github Project Repository](${gitRepo}) 
  - [Github Project URL](${gitUsername}) 
  
  ## Contact
  If you have any questions about the repo, open an issue or contact me directly at ${email}.`;
};

module.exports = generateMarkdown;
