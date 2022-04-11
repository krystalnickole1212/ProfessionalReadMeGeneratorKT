const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

//array of questions for user input
const questions = [ 
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "tests"
    },
    {
        type: "list",
        message: "Please select a type of license.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "GNU GPLv3"
        ]
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the link to your project?",
        name: "link"
    }
]; 

;

//  function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
            return
        }
        console.log("file written successfully");
    });
    
} 



//function to initialize app
function init() {
    inquirer
    .prompt(
     //questions in here */
        questions
    )
    .then((answers) => {
        
        const markdown = generateMarkdown(answers);
        console.log(markdown);
        writeToFile('README.md', markdown);
     

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment

      } else {
        // Something else went wrong

      }
    });
}

// Function call to initialize app
init();
