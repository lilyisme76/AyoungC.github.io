
function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(300, 70, 90, 25);
    
    fill('aquamarine');
    stroke('yellow');
    for(var i = 100; i < 8080; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }

    

    fill('blue');
    stroke('white');
    if(mouseX < 370){
        rect(mouseX, mouseY,20,20);
    }else{
        rect(mouseX, mouseY,50,50,50);
    }  
}