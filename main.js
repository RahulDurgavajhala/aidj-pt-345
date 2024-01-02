song1 = ""
song2 = ""
leftWristX = 0
rightWristX = 0
leftWristY = 0
rightWristY = 0
scoreRightWrist = 0
scoreLeftWrist = 0
song1_status = "False"
song2_status = "False"
function setup(){
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	posenet = ml5.poseNet(video , modeloaded)
	posenet.on("pose" , gotPoses)
function preload(){
song1 = 	loadSound("sound1.mp3")
song2 = loadSound("sound2.mp3")
}
}
function draw(){
image(video,0,0,600,500);
fill("red")
stroke("red")
if(scoreLeftWrist > 0.2){
	circle(leftWristX, leftWristY, 20)
	
	if(song1_status == "False"){
		song1.play()
	}
}
if(scoreRightWrist > 0.2){
	circle(rightWristX, rightWristY, 20)
	
	if(song2_status == "False"){
		song2.play()
	}
}
}


function modeloaded(){
	console.log("posenet is initiallized")
}
function gotPoses(results){
	console.log(results)
	scoreLeftWrist = results[0].pose.keypoints[9].score
	leftWristX= results[0].pose.leftWrist.x
	leftWristY = results[0].pose.rightWrist.y
	rightWristX= results[0].pose.leftWrist.x
	rightWristY = results[0].pose.rightWrist.y

}