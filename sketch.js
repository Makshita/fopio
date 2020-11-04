var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new GG(400,680,800,20);
	ball= new PB(100,100);
	fill("brown");
	wall1=new GG(700, 640, 10,50);
	wall2=new GG(645,660,100,10);
	wall3=new GG(600, 640,10,50);


	Engine.run(engine);
 
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ball.display();
 ground.display();
 wall1.display();
 wall2.display();
 wall3.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10})
	}

}

