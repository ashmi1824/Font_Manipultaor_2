function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);

    canvas=createCanvas(550,500);
    canvas.position(560,150);
 poseNet= ml5.poseNet(video , modelLoaded);
 poseNet.on('pose', gotPoses);

}
function draw(){
    background('#4B0082');
}
function modelLoaded(){
    console.log("Posenet is Working");
}
function gotPoses(results){
    if(results.length>0){
        console.log("results");
    }
}
