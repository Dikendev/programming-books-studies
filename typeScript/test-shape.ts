import shape = require("./shape-interface");
import circle = require("./circle");
import triangle = require("./triangle");

function drawAllShapes(shapeToDraw: shape.Shape) {
	shapeToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
