const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        name: "userName", 
        type: "input", 
        message:"What is your github username?"  

    }
,
    {
        name: "", 
        type: "" , 
        message: 
    }
,
    {
        name: , 
        type: , 
        message: 
    }
,
    {
        name: , 
        type: , 
        message: 
    }
//WRITE MORE QUESTIONS 

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
            return
        }
        console.log("file written successfully");
    });
    
} 

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
      /* Pass your questions in here */
        questions
    )
    .then((answers) => {
        
        const markdown = generateMarkdown(answers);
        console.log(markdown);
        writeToFile('README.md', markdown);
      // Use user feedback for... whatever!!

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
