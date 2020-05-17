var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,/* ground */wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	wall1=createSprite(400,650,200,20);
	wall1.shapeColor=color("red");
	wall2=createSprite(300,610,20,100);
	wall2.shapeColor=color("red");
	wall3=createSprite(500,610,20,100);
	wall3.shapeColor=color("red");

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	wall1 = Bodies.rectangle(width/2, 725, width, 200 , {restitution:0.3, isStatic:true} );
 	World.add(world, wall1);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  if (packageBody.isStatic===false){
		 
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



