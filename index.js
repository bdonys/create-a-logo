// Create textColor and shapeColor
// Export textColor and shapeColor






const inquirer = require('inquirer');
const fs = require('fs');
const { createLogo } = require('./lib/createLogo');

// Function for three character limit text
const text = (input) => {
    if (input.length > 3) {
        return 'Please enter up to three characters for your text: ';
    }
    return true;
};

// Function for color keyword OR hexadecimal code



// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to three characters for your text: ',
                validate: text,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color keyword or hexadecimal code for the text: ',
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color keyword or hexadecimal code for the shape: ',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape: ',
                choices: ['circle', 'square', 'triangle'],
            }
        ])
        .then((answers) => {
            const svgContent = createLogo(answers);
            fs.writeFileSync('logo.svg', svgContent);
            console.log('Generated logo.svg');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();