const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("this test should render a circle svg", () => {
    const expectedShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx=\"25\" cy=\"75\" r=\"20\" stroke="green" fill="green" stroke-width=\"5\"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text></svg>`;
    const newCircle = new Circle("green", "abc", "red");
    const svgCircle = newCircle.shape();
    expect(svgCircle).toEqual(expectedShape);
  });
});

describe("Square", () => {
  test("this test should render a square svg", () => {
    const expectedShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x=\"50\" y=\"25\" width=\"200\" height=\"200\" fill=\"green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text></svg>`;
    const newSquare = new Square("green", "abc", "red");
    const svgSquare = newSquare.shape();
    expect(svgSquare).toEqual(expectedShape);
  });
});

describe("Triangle", () => {
  test("this test should render a triangle svg", () => {
    const expectedShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill= "green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text></svg>`;
    const newTriangle = new Triangle("green", "abc", "red");
    const svgTriangle = newTriangle.shape();
    expect(svgTriangle).toEqual(expectedShape);
  });
});
module.exports = { Circle, Square, Triangle };
