const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");
const logoSVG = require("./lib/shapes");

// const colors = require("colors");

const userInput = [
  {
    type: "input",
    message: "Enter 3 letters for the text",
    name: "Logo text",
  },
  {
    type: "color",
    message: "Enter a text color",
    name: "Logo color",
  },
  {
    type: "list",
    message: "Select a shape",
    name: "Shape",
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
    fs.writeFile(
      "logo.svg",
      logoSVG(prompt),

      (err) => (err ? console.log(err) : console.log("Success"))
    );
    console.log(prompt);
  });
}

init();
