function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}

function modalLoaded() {
            
    console.log("It has been loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
      console.log(results);
    }
}