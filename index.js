

const inquirer = require('inquirer');
const fs = require('fs');
const { validateColor, createLogo } = require('./lib/createLogo');


// Function for three character limit text
const text = (input) => {
    if (input.length > 3) {
        return 'Please enter up to three characters for your text: ';
    }
    return true;
};

// Function to initialize app
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your text: ',
        validate: text,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a basic color keyword or hexadecimal code for the text: ',
        validate: validateColor,
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a basic color keyword or hexadecimal code for the shape: ',
        validate: validateColor,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape: ',
        choices: ['circle', 'square', 'triangle'],
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully created logo!');
        }
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const logo = createLogo(answers);
            writeToFile('logo.svg', logo);
        })
};


// Function call to initialize app
init();