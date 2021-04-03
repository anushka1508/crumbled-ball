
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stone ,iron ,rubber,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;


function setup() {
	var canvas = createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground (600,height,1200,20);
   stone = new Stone (700,320,100,100);
   iron = new Iron (800,500);
   rubber = new Rubber(900,450,70);
   hammer = new Hammer(10,100);

   Sand1 = new Sand(505,450,10);
   Sand2 = new Sand(510,450,10);
   Sand3 = new Sand(515,450,10);
  Sand4 = new Sand(520,450,10);
  Sand5 = new Sand(525,450,10);
   Sand6 = new Sand(515,445,10);
  Sand7 = new Sand(520,445,10);
   Sand8 = new Sand(525,445,10);
   Sand9 = new Sand(530,445,10);
   Sand10 = new Sand(535,445,10);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  
  iron.display();
  hammer.display();
  stone.display();
  rubber.display();
  Sand1.display(); 
   Sand2.display(); 
 Sand3.display(); 
   Sand4.display(); 
   Sand5.display(); 
   Sand6.display(); 
   Sand7.display(); 
   Sand8.display(); 
   Sand9.display(); 
   Sand10.display(); 

  drawSprites();
 
}



