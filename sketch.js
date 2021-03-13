
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(400,300)
stone = new Stone(310,430)
ground = createSprite (400,590,800,15)
ground.shapeColor = "red"
rubber = new Rubber(750,580)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
   
  hammer.display()
  ground.display()
  stone.display()
  rubber.display()
}



