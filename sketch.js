var bg, bgImg;
var earth, earthImg;
var plane, planeImg;

function preload(){
	bgImg = loadImage("spaceBg.jpg");
	earthImg = loadImage("EarthImageEdited.png");
	planeImg = loadImage("jetplane.png");
}

function setup() {
	createCanvas(530, 870);
	
	bg = createSprite(100,100);
	bg.addImage(bgImg);
	bg.scale = 0.6;

	earth = createSprite(270, 950);
	earth.addImage(earthImg);
	earth.scale = 2;

	plane = createSprite(270, 450);
	plane.addImage(planeImg);
	earth.scale = 2;





  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



