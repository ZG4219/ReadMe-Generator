// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What was your motivation?",
    name: "Description"
}, {
    type: "input",
    message: "Why did you build this project?",
    name: "Table of Contents"

}, {
    type: "input",
    message: "What is your GitHUb username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your e-mail address?",
    name: "E-mail"

},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
