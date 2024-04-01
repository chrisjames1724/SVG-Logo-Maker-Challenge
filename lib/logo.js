


function createLogo(data){
	let logo = {}
	if (data.shape == "circle"){
		logo = new Circle(data.shape,data.shapeColor,data.text,data.textColor)
	} else if (data.shape == "square") {
		logo = new Square(data.shape,data.shapeColor,data.text,data.textColor)
	} else if(data.shape == "triangle") {
		logo = new Triangle(data.shape,data.shapeColor,data.text,data.textColor)
	}
	return logo
}

function generateXML(logo){
	// create boiler plate
	let startXML = "<?xml version=\"1.0\" standalone=\"no\"?><svg width=\"200\" height=\"250\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">"
    // TODO: Fix the text XML (anchor)
    let textXML = " <text x=\"25\" y=\"75\" color=\"${logo.textColor}\">${logo.text}</text>"
    let shapeXML = "" 
}


// TODO: Call logo.render() to get custom shape XML
    // create XML for logo based on user input






function writeToFile(file, shape) { 
}

function generateMarkdown(data) {
}


const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');