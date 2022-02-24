
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var jet,jetImg;
var sky,skyImg;


function preload(){
skyImg=loadImage("sky.jpg");
jetImg=loadImage("jet.jpg");

}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var sky_options={
isStatic:true
	}
	var jet_options={
isStatic:true
	}


	//Create the Bodies Here.
	sky=Bodies.rectangle(390,290,80,10,sky_options)
	World.add(world,sky)

	jet=Bodies.rectangle(490,190,50,20,jet_options)
World.add(world,jet)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(sky.position.x,sky.position.y,50,100)
  rect(jet.position.x,jet.position.y,50,100)

imageMode(CENTER);
image(skyImg,390,290,990,850)
image(jetImg,450,570,190,254)
  
  drawSprites();
 
}



