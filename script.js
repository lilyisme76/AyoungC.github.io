console.log("P5.js sketch is running!");

function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 30, 30);
}
