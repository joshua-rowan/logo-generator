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

        const svg = `<polygon points="150,0 300,200 0,200" fill="${this.color}" />`;
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
        const svg = `<rect x="30" y="0" width="230" height="200" fill="${this.color}"/>`;
        return svg;
    }
};

module.exports = {
    Triangle,
    Circle,
    Square,
}