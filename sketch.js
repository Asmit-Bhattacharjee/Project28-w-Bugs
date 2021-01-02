const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy_image, boy;

function preload()
{
	boy_image = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100, 540, 200, 200);
	boy.addImage("Boy", boy_image)
	boy.scale = 0.08;

	ground = new Ground(600,600,1200,20);
	tree = new Tree(600, 500, 0.1, 0.1);
	stone = new Stone(200, 200);
	mango1 = new Mango(495, 400, 10);
	mango2 = new Mango(525, 420, 10);
	mango3 = new Mango(540, 370, 10);
	mango4 = new Mango(575, 400, 10);
	mango5 = new Mango(590, 350, 10);
	mango6 = new Mango(625, 330, 10);
	mango7 = new Mango(625, 370, 10);
	mango8 = new Mango(650, 400, 10);
	mango9 = new Mango(690, 380, 10);
	mango10 = new Mango(725, 400, 10);

	elastic = new Elastic(stone.body, {x:50, y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  elastic.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    elastic.fly();
}

function detectCollision(lstone, lmango){
	 mango10.body.position = lmango.body.position 
	 stone.body.position = lstone.body.position 
	 var distance=dist(stone.body.position.x, stone.body.position.x, lmango.body.position.x, lmango.body.position.y) 
	 if (distance<=lmango.radius+lstone.radius){
		  Matter.Body.setStatic(mango1.body,false) 
		}
	 }