function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 50, 70);
    circle(600, 50, 70);
    circle(50, 440, 70);
    circle(600, 440, 70);
    fill("#00FF00");
    stroke("#00FF00");
    rect(85, 30, 480, 50);
    rect(85, 420, 480, 50);
    rect(30, 85, 50, 320);
    rect(580, 85, 50, 320);
    
}

function take_snapshot(){
    save('student_name.png');
}



