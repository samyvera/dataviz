let x, y;
let i = 0;
let posX, posY;
let cOffset = 0;

function setup() {
	createCanvas(innerWidth, innerHeight);
	x, y = 0;
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	
	posX = innerWidth / 2;
	posY = innerHeight / 2;
}

function draw() {
	const inc = height/100;
    colorMode(HSB);

    for(let y = 0; y < height; y += inc) {
        let h = y / height * 360;
        fill(abs(h-cOffset)%360, 100, 100);
        noStroke();
        rect(0, y-inc, width, y);
    }

    cOffset += 5;

	fill('#000');
	stroke('#0000');
	for (let j = 1; j < 10; j++) {
		ellipse(posX + x * 1 / j, posY + y * 1 / j, 64 * 1 / j, 64 * 1 / j);
	}

	x = Math.cos(i * 0.5) * innerWidth / 4;
	y = Math.sin(i * 0.5) * innerHeight / 4;
	i++;
}