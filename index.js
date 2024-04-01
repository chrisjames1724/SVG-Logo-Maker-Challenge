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
    if (prompt.shape=='circle') {
      logo = new Circle (prompt.shapeColor, prompt.text, prompt.textColor)
    }
     else if (prompt.shape=='triangle') {
      logo = new Triangle (prompt.shapeColor, prompt.text, prompt.textColor)
    }
    else {
      logo = new Square (prompt.shapeColor, prompt.text, prompt.textColor)
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
// Collects User Input (Color, Shape, Text)
// Step. 1) Saving the logo data into a appropriate class (Square, Triangle, Circle)
// Create a object of type shape with data member (color/text)
//That would look like this > let logo = new Square(color,text)

// logo = new Square(color, text);
// logo = new Circle(color, text);
// logo = new Triangle(color, text);
// Step 2) Generate the markdown (XML) for the logo
// This might look like this > let generatedMarkdown = logo.generateMarkdown()
// Step 3) Saving the logo
// This might look like this > fs.writefile(mylogo.svg, generateMarkdown)

/*
   inquirer.prompt(prompt information)
   let logo = new logo()
   if (input = circle){
      logo = new circle(prompt info)
   } else if (input = square) {
      logo = new square(prompt info)
   }... 
   fs.writefile("filename.svg",logo.generateMarkdown())

*/
// fs.writeFile("logo.svg", logo.generateMarkdown(prompt), (err) =>
//   err ? console.log(err) : Console.log("Success")
// );

//
// collected user data with inquirer
// TODO: Update your init() to call generateXML() and createLogo()
// function init() {
//   inquirer.prompt(questions).then(function (prompt) {
//     // writeFile(fileName,   fileText,                        error_callback)
//     fs.writeFile("logo.svg", generateXML(createLogo(prompt)), (err) =>
//       err ? console.log(err) : console.log("Success")
//     );
//     //console.log(prompt);
//   });
// }
