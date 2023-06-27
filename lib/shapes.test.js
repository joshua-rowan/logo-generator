const Triangle = require('./shapes').Triangle;
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;

describe('Shape classes', () => {
    test('Triangle render() should generate triangle SVG markup', () => {
        const triangle = new Triangle('red');
        const expectedSVG = '<polygon points="150,0 300,200 0,200" fill="red" />';
        expect(triangle.render()).toBe(expectedSVG);
    });

    test('Circle render() should generate correct SVG markup', () => {
        const circle = new Circle('blue');
        const expectedSVG = '<circle cx="150" cy="100" r="100" fill="blue"/>';
        expect(circle.render()).toBe(expectedSVG);
    });

    test('Square render() should generate correct SVG markup', () => {
        const square = new Square('green');
        const expectedSVG = '<rect x="0" y="0" width="300" height="200" fill="green"/>';
        expect(square.render()).toBe(expectedSVG);
    });
});