let x, y = 0;
let i = 0;
let posX, posY;
let cOffset = 0;

function setup() {
	createCanvas(innerWidth, innerHeight);
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

let img;
function preload() {
  img = loadImage('https://files.catbox.moe/nicp0s.png');
}

function draw() {
	const inc = height/100;
    colorMode(HSB);

    for(let y = 0; y < height; y += inc) {
        let h = y / height * 360;
        fill(abs(h-cOffset)%360, 100, 100, 50);
        noStroke();
        rect(0, y-inc, width, y);
    }

    cOffset += 5;

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

	x = Math.cos(i * 0.125) * innerWidth / 2;
	y = Math.sin(i * 0.125) * innerHeight / 2;
	i++;
}