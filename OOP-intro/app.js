//* Factory Functions
//? Factory is an analogy, a comparison saying that the information you put in
//? will go through several different processes to create a product.

//? Converts RGB to HEX
function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

hex(255, 100, 25);
// "#ff6419"

function makeColor(r, g, b) {
	const color = {}; //? Create the object {}
	color.r = r; //? Add some properties
	color.g = g;
	color.b = b;
	color.rgb = () => {
		//? Add some methods
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = () => {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	};
	return color; //? Then return the object
}

const firstColor = makeColor(35, 255, 255);
