
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin (770, 520, 160, 20);
	
	dustbin2 = new Dustbin (860, 490, 20, 80);
	
	dustbin3 = new Dustbin (680, 490, 20, 80);
	
	paperObject= new Paper (120, 400,20);
	
	ground = new Dustbin(500, 540, 1000, 10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
ground.display();

  
  
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-50});

    }

}

