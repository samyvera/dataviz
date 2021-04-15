let x, y = 0;
let i = 0;
let posX, posY;
let cOffset = 0;

let points = Array(30).fill(null).map(obj => ({x:Math.random() * innerWidth, y:Math.random() * innerHeight}));

function setup() {
	createCanvas(innerWidth, innerHeight, WEBGL);
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

var theta = 0;
let img;
let img2;
function preload() {
	img = loadImage('https://files.catbox.moe/nicp0s.png');
	img2 = loadImage('https://files.catbox.moe/41x6d3.jpg');
}

function draw() {
	translate(-innerWidth / 2, -innerHeight / 2);
	const inc = height / 100;
	colorMode(HSB);
	for (let y = 0; y < height; y += inc) {
		let h = y / height * 360;
		fill(abs(h - cOffset) % 360, 100, 100);
		noStroke();
		rect(0, y - inc, width, y);
	}

	cOffset += 5;

	points = points.map(obj => ({x:obj.x + Math.random() * 10 - 5, y:obj.y + Math.random() * 10 - 5}));
	points.forEach(({x, y}) => {
		stroke(360 * Math.random(), 100, (50 + 25 * Math.random()));
		const azaza = Math.cos((i%60) / 10) * 50;
		rect(x-azaza /2, y - azaza/2, azaza, azaza);
	})

	for (let j = 1; j < 10; j++) {
		fill('#fff');
		stroke('#0000');
		ellipse(posX + x * 1 / j, posY + y * 1 / j, 64 * 1 / j, 64 * 1 / j);
		ellipse(posX - x * 1 / j, posY - y * 1 / j, 64 * 1 / j, 64 * 1 / j);
		fill('#000');
		stroke('#0000');
		ellipse(posX + x * 1 / j, posY - y * 1 / j, 64 * 1 / j, 64 * 1 / j);
		ellipse(posX - x * 1 / j, posY + y * 1 / j, 64 * 1 / j, 64 * 1 / j);
	}
	image(img, innerWidth / 2 - 270, innerHeight / 2 - 270, 540, 540);

	translate(innerWidth / 2 + Math.cos(theta) * innerWidth / 2, innerHeight / 2 + Math.sin(theta) * innerHeight / 2);
	rotateX(theta * mouseX * 0.001);
	rotateZ(theta * mouseX * 0.001);
	rotateY(theta * mouseX * 0.001);
	noFill();
	noStroke();
	push();
	texture(img2);
	sphere(300);
	pop();

	theta += 0.05;

	x = Math.cos(i * 0.125) * innerWidth / 2;
	y = Math.sin(i * 0.125) * innerHeight / 2;
	i++;
}