var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,stickSprite,stick1Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	stick1Sprite=createSprite(400, 650, 200,30);
	stick1Sprite.shapeColor=color("red");
	stick2Sprite=createSprite(450, 600, 20,100);
	stick2Sprite.shapeColor=color("red");
    stick3Sprite=createSprite(340, 600, 20,100);
    stick3Sprite.shapeColor=color("red");

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	stick1Body = Bodies.rectangle(400, 640,200, 30 , {isStatic:true} );
	World.add(world, stick1Body);

	packageBody = Bodies.circle(width/2 , 200 , 5,{restitution:0});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  packageBody.isStatic=true;

  rectMode(CENTER);
  if(keyCode === DOWN_ARROW) {
	
	packageBody.isStatic =false;
  //packageBody.isStatic == false;
  }
  packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
  //packageSprite.velocityY=5;

 

  drawSprites();
 
}


