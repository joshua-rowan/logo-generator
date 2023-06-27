// shapes parent class
class Shape {
    // all shapes will take on color parameter
    constructor(color) {
        this.color = color;
    }

    render () {
        // to be passed on and filled out by child classes
        throw new Error('Method rendor() must be implemented.');
    }
};

class Triangle extends Shape {
    
    constructor(color) {
        super(color);
    }


    render() {
        const width = 300;
        const height = 200;

        const x1 = width / 2;        // X-coordinate of the top vertex
        const y1 = 0;                // Y-coordinate of the top vertex
        const x2 = width;            // X-coordinate of the bottom-right vertex
        const y2 = height;           // Y-coordinate of the bottom-right vertex
        const x3 = 0;                // X-coordinate of the bottom-left vertex
        const y3 = height;           // Y-coordinate of the bottom-left vertex

        const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;

        const svg = `<polygon points = "${points}" fill="${this.color}" />`;
        return svg;
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        
        const svg = `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
        return svg
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const svg = `<rect x="0" y="0" width="300" height="200" fill="${this.color}"/>`;
        return svg;
    }
}