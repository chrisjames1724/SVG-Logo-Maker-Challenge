const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const userInput = [
  {
    type: "input",
    message: "Enter 3 letters for the text",
    name: "text",
  },
  {
    type: "color",
    message: "Enter a text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "Select a shape",
    name: "shape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    message: "Select a shape color",
    name: "shapeColor",
  },
];

function init() {
  inquirer.prompt(userInput).then(function (prompt) {
    let logo;
    if (prompt.shape == "circle") {
      logo = new Circle(prompt.shapeColor, prompt.text, prompt.textColor);
    } else if (prompt.shape == "triangle") {
      logo = new Triangle(prompt.shapeColor, prompt.text, prompt.textColor);
    } else {
      logo = new Square(prompt.shapeColor, prompt.text, prompt.textColor);
    }
    fs.writeFile(
      "logo.svg",
      logo.shape(),

      (err) => (err ? console.log(err) : console.log("Success"))
    );
    console.log(prompt);
  });
}

init();
