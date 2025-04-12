
let confetti = [];
const numConfetti = 20; 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('pointer-events', 'none');
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '9999');
  

  for (let i = 0; i < numConfetti; i++) {
    confetti.push(new Confetto());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].update();
    confetti[i].show();
  }
}

class Confetto {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(5, 12);
    this.speed = random(0.5, 2);
    let alpha = 30;
    this.color = color(random(255), random(255), random(255), alpha);
  }
  
  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-50, -10);
      this.x = random(width);
    }
  }
  
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
