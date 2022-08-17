function setup() {
    canvas = createCanvas(640, 480); 
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480); 
   
    fill("green")
    rect(30, 14, 580, 30);
    rect(30, 435, 580, 30);
    rect(12, 14, 35, 437);
    rect(595, 14, 35, 437);

    fill("red")
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
}

function take_snapshot(){
    save('photo.png');
}
