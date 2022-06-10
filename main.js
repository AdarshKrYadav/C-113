function preload(){}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,220,120,230,230);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(590,50,80);
    circle(50,400,80);
    circle(590,400,80);
    fill(0,255,0);
    stroke(0,255,0);
    rect(90,40,460,20);
    rect(90,390,460,20);
    rect(40,90,20,270);
    rect(580,90,20,270);
}
function take_snapshot(){
    save("Image.png");
}