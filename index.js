const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

//Function to generate the SVG file
function generateSVG(shape, color) {
    console.log(shape);
    console.log(color);
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
        const {shape, shapeColor} = answers;
        generateSVG(shape, shapeColor);
    })