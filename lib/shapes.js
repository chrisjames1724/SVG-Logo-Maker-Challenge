// function Logo(color, text) {
//     this.color = color;
//     this.text = text;
// }

// function Triangle (color, data) {
//     Logo.call(this, color, text)
// }

// function Circle (color, data) {
//     Logo.call(this, color, data)
// }

// function Logo(color, data) {
//     Logo.call(this, color, data)
// }

// function logoSVG(data) {
//   console.log("DATA:", data);
//   return `#${data}`;
// }

// BEGIN TODO: Move the below classes to the correct shape.js file (Shape, Circle, Square, Triangle)
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  shape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx=\"25\" cy=\"75\" r=\"20\" stroke=\"${this.shapeColor}\" fill=\"${this.shapeColor}\" stroke-width=\"5\"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  shape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x=\"50\" y=\"25\" width=\"200\" height=\"200\" fill=\"${this.shapeColor}\" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  shape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

// // BEGIN TODO: Refactor the shape render code into the Square, Circle, Triangle classes
// if(logo.shape == "circle"){
// 	// TODO: fix this circle code
// 	shapeXML = "<circle cx=\"25\" cy=\"75\" r=\"20\" stroke=\"${logo.color}\" fill=\"fill\" stroke-width=\"5\"/>"
// } else if (logo.shape == "square"){
// 	shapeXML = "<rect x=\"50\" y=\"25\" width=\"200\" height=\"200\" fill=\"${logo.color}\" />"
// } else if (logo.shape == "triangle"){
// 	shapeXML = '<polygon points="150, 18 244, 182 56, 182" fill= "${logo.color}"/>'
// }
// END TODO

// 	const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// end boiler plate
let endXML = "</svg>";
//
// return startXML + shapeXML + textXML + endXML

module.exports = { Circle, Triangle, Square };
