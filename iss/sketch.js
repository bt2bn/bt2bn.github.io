var lineX=0;
var url="http://api.open-notify.org/iss-now.json"
var issX=0;
var issY=0;
var img;
var bg;

function preload(){
  img=loadImage("/images/ISS.png");
}


function setup() {
  createCanvas(600,400);
  setInterval(askISS,1000);
  bg=loadImage("/images/map.jpg");
}

function askISS(){
  loadJSON(url,gotData,'jsonp');  
}

function gotData(data){
  var lat=data.iss_position.latitude;
  var long=data.iss_position.longitude;
  issX=map(lat,-90,90,0,width);
  issY=map(long,-180,180,0,height);
}

function draw() {
  background(bg);
  image(img,issX,issY,img.height/10,img.width/10);
  stroke(0);
  line(lineX,0,lineX,height);
  lineX=lineX+5;
  if(lineX>width){
    lineX=0;
  }
}