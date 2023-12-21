function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log('right wrist x = ' + results[0].pose.rightWrist.x);
        console.log('right wrist y = ' + results[0].pose.rightWrist.y);
        console.log('left wrist x = ' + results[0].pose.leftWrist.x);
        console.log('left wrist y = ' + results[0].pose.leftWrist.y);
    }
}