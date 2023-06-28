const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

//Function to generate the SVG file
function generateSVG(shape, color, text, textColor) {
    let svgMarkup;
    switch (shape) {
        case 'circle':
            const circle = new Circle(color);
            svgMarkup = circle.render();
            break;
        case 'triangle':
            const triangle = new Triangle(color);
            svgMarkup = triangle.render();
            break;
        case 'square':
            const square = new Square(color);
            svgMarkup = square.render();
            break;
        default:
            console.log('Invalid shape selection.');
            return;
    }

    const textElement = `<text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>`;

    const wrappedSVGMarkUp = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgMarkup}
    ${textElement}
    </svg>`;

    fs.writeFileSync('logo.svg', wrappedSVGMarkUp);

    console.log('Generated logo.svg');
}

//Write the SVG markup to the file

//CLI with Inquirer
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Please enter no more than 3 characters.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number)',
        }
    ])
    .then((answers) => {
        const {shape, shapeColor, text, textColor} = answers;
        generateSVG(shape, shapeColor, text, textColor);
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });