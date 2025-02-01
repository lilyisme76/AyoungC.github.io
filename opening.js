
let x = 0;
let y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#AFDBF5');
    rect(60,35,600,400);
    x = x + 2;
    x = x % 200;
    y = y + 5;
    y = y % 500;
}
