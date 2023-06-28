const Triangle = require('./shapes').Triangle;
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;

describe('Shape classes', () => {
    test('Triangle render() should generate triangle SVG markup', () => {
        const triangle = new Triangle('red');
        const expectedSVG = '<polygon points="170,20 320,220 20,220" fill="red" />';
        expect(triangle.render()).toBe(expectedSVG);
    });

    test('Circle render() should generate correct SVG markup', () => {
        const circle = new Circle('blue');
        const expectedSVG = '<circle cx="170" cy="120" r="100" fill="blue"/>';
        expect(circle.render()).toBe(expectedSVG);
    });

    test('Square render() should generate correct SVG markup', () => {
        const square = new Square('green');
        const expectedSVG = '<rect x="50" y="20" width="220" height="220" fill="green"/>';
        expect(square.render()).toBe(expectedSVG);
    });
});