function createLogo({ text, textColor, shape, shapeColor }) {
    const shape = {
        circle: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="50%" fill="${shapeColor}" />
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
    return shape[shape];
};

module.exports = { createLogo };