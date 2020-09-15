
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bob1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(200,200,40);
    ground=new Ground(400,170,400,45);
    rope1 = new Rope({x:200, y:170},bob1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display();
  bob1.display();
  rope1.display();
  drawSprites();
 
}



