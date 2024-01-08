function createLogo({ text, textColor, shape, shapeColor }) {
    const shapes = {
        circle: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="38%" fill="${shapeColor}" />
                <text x="50%" y="50%" font-size="30" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
            </svg>`,
        triangle: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="150,20 280,180 20,180" fill="${shapeColor}" />
                  <text x="50%" y="50%" font-size="30" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
              </svg>`,
        square: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${shapeColor}" />
                <text x="50%" y="50%" font-size="30" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
             </svg>`,
    };
    return shapes[shape] || ''; // Return the selected shape's SVG template, or an empty string if not found
}

function isValidHexColor(input) {
    const hexChars = '0123456789abcdefABCDEF';
    return input.length === 6 && input.split('').every(char => hexChars.includes(char));
}

function isValidColorName(input) {
    const colorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'white'];
    return colorNames.includes(input.toLowerCase());
}

function isValidColor(input) {
    return isValidHexColor(input) || isValidColorName(input);
}

function validateColor(input) {
    return isValidColor(input) ? true : 'Please enter a valid color keyword or hexadecimal code: ';
}

module.exports = { createLogo, validateColor };