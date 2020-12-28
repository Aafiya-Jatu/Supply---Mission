var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

gameState = "notDropped";

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6  

	groundSprite=createSprite(width/2,665,width,10);
	groundSprite.shapeColor=color(255)

	//to create the box

	box1Body = Bodies.rectangle(380,630,200,20, {isStatic: true});
	World.add(world,box1Body);

	box1 = createSprite(380,650,300,20);
	box1.shapeColor = color("red");
	
	box2Body = Bodies.rectangle(380,560,30,200,{isStatic: true});
	World.add(world,box2Body);

	box2 = createSprite(230,575,30,170);
	box2.shapeColor = color("red");
	
	box3Body = Bodies.rectangle(480,560,30,200, {isStatic: true});
	World.add(world,box3Body);

	box3 = createSprite(520,575,30,170);
	box3.shapeColor = color("red");
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 655, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  drawSprites();
 
}

function keyPressed() {

 if(keyCode === LEFT_ARROW){
	 helicopterSprite.x = helicopterSprite.x-20;
	 if(gameState === "notDropped"){
		 translation = {x: 20, y: 0}
		 Matter.Body.translate(packageBody, translation);
	 }
 }
 else if(keyCode === RIGHT_ARROW){
	 helicopterSprite.x = helicopterSprite.x+20;
	 if(gameState === "notDropped"){
		 translation = {x: 20, y: 0}
		 Matter.Body.translate(packageBody, translation);
	 }
 }

 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	   
  }
}



