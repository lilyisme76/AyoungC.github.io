document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    
    // Example: Add event listener for future interactions
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            console.log(`Hovered over: ${link.textContent}`);
        });
    });
});

function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 30, 30);
}