status="";

function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='Status: Object Detecting...';
    value=document.getElementById("objectsI");
}

function modelLoaded(){
    console.log('COCOSSD is initialized');
    status=true;
}

function draw(){
    image(video,0,0,280,280);
}