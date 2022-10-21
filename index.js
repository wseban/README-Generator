// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');
let badge;


const generatedMarkdown = (answers) => `
# ${answers.title}
${badge.badge}
## Table of Contents
- [Description](#Description)
- [Installation](#installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [License](#License)
- [Questions](#Questions)

## <a id=Description>Description</a>
${answers.description}
## <a id=Installation>Installation</a>
${answers.installation}
## <a id=Usage>Usage</a>
${answers.usage}
## <a id=Contributions>Contributions</a>
${answers.contributions}
## <a id=License>License</a>
${answers.license}<br>
${badge.link}
## <a id=Questions>Questions</a>
https://github.com/${answers.github}<br>${answers.email}`
// TODO: Create an array of questions for user input
const questions = [];

function runInquirer() {
  inquirer
  .prompt([
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'What is a short description of your project?',
          name: 'description',
        },
        {
          type: 'input',
          message: 'How would a user install your project?',
          name: 'installation',
        },
        {
            type: 'input',
            message: 'How does your project work?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'What is the license used for this project?',
            name: 'license',
            choices: ['MIT', 'Mozilla', 'Apache', 'IBM', 'N/A']
        },
        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
      ])
      .then((answers) => {
        badge = genMarkdown(answers.license);
        const README = generatedMarkdown(answers);
        console.log(answers);
        console.log(badge);
        writeToFile(README);
      })
}

// TODO: Create a function to write README file
function writeToFile(README) {
    fs.writeFile('./product/README.md', README, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    runInquirer()
    
}

// Function call to initialize app
init();



/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests //input type
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under // license is multiple choice
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile //what is your github profile? email addresss?  - questions
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/