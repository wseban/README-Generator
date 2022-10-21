# README Generator

## Screen-Castify Video

Link
https://watch.screencastify.com/v/U0XJCM0E0F7ETHfJCBOL

## Usage
Using the command line on their computer, the user should navigate to the readme generator.  In order to install necessary dependents, the user should run "npm install".  
The user should then proceed with 'node index.js' which initiates the prompts for filling out the README.md.  When finished the user will have a brand new, well formatted README in the product folder of the README-Generator file. 

![Site](./Pics/Screen%20Shot%202022-10-21%20at%204.28.00%20PM.png)
 
![Site](./Pics/README%20preview.png)

## Technologies Used
- Node.js - An asynchronous event-driven program to run Javascript.
- JavaScript - Allows developer to make static webpages dynamic and interactive.  For this exercise it was used to alter the original webpage to change the questions, change the answers, add a dynamic timer/countdown(that also ends the game), as well as, allow saving of scores.
- Git - Git is what I used to work on my personal computer and pushing my work to GitHub.
- GitHub - A cloud based repository that holds my saved code reserved for resetting my personal computer deployment.

## Description

The purpose of this project was to utilize our skills with Node.js and JavaScript to create a README.md using nothing more than the Command Line Interface (CLI).  This README generator served as practice for some new concepts such as, string literals, inquirer and module exports.

## Installation

Navigate to file using your command line and run 'npm i'.  This will enable you to use the prompt method from inquirer.  After the dependencies have been downloaded run 'node index.js' which will trigger the prompts in the command line.  The answers to these prompts will be displayed on the final product.

## Lessons Learned
The most effective lessons learned for me were...
1. Using module exports to learn how to better organize and utilize code within a given file.  
2. Using fileSystem within node to write my README.


## Code Snippets
JavaScript
```javaScript
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');
```
```JavaScript
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
```
```JavaScript
function writeToFile(README) {
    fs.writeFile('./product/README.md', README, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
```
## Credits

NA

## License
Please refer to the LICENSE in the Repo.