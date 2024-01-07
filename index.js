const inquirer = require('inquirer');
const fs = require('fs');


// Function for three character limit text
const text = (input) => {
    if (input.length > 3) {
        return 'Please enter up to three characters for your text: ';
    }
    return true;
};

// Function for color keyword OR hexadecimal code



// Function for shapes



// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to three characters for your text: ',
            },
            {
                type: 'input',
                name: 'color',
                message: 'Please enter a color keyword or hexadecimal code: ',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape: ',
                choices: ['circle', 'square', 'triangle'],
            }
        ])
}

// Function call to initialize app
init();