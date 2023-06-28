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

        const svg = `<polygon points="170,20 320,220 20,220" fill="${this.color}" />`;
        return svg;
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        
        const svg = `<circle cx="170" cy="120" r="100" fill="${this.color}"/>`;
        return svg
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const svg = `<rect x="50" y="20" width="220" height="220" fill="${this.color}"/>`;
        return svg;
    }
};

module.exports = {
    Triangle,
    Circle,
    Square,
}