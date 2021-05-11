# README GENERATOR

## Description

The aim of this project is to generate a README file using Node JS and inquirer package. The inquire package is used to prompt the user with questions. Based on the answers given from the user, a README file is generated inside the output directory of this project.

The Project contains the file questions.js where the questions to ask to the user are; createFile.js - that creates the README file in the output folder and generateMarkdown.js that generates the markdown based on the answers given to the questions.

In the question.js, validation for the URL and the email address is performed. The application will not continue the execution if the data entered for the respective answers is not an URL or/and email.

## Table of Contents

- [README GENERATOR](#readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation Instructions](#installation-instructions)
  - [Tests](#tests)
  - [Screenshots](#screenshots)
  - [Github](#github)

## Installation Instructions

```
npm init
npm install inquirer
```

## Tests

Manual tests have been performed for this project

## Screenshots

![Screenshot from the application](./assets/images/test.png)

## Github

- [Github Project Repository](https://github.com/vilmaq/readme-generator)
- [Github Project URL](vilmaq)
- [Explanatory Video](https://drive.google.com/file/d/1t7oQi60m44GCjo5DCjbr4WhjR8lmwylw/view)
