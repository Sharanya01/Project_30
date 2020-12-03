const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;

function preload(){
  polygonImg=loadImage("devil.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  
  world = engine.world;
  b1 = new Box(300,275);
 
  b2 = new Box(330,275);
  b3 = new Box(360,275);
  b4 = new Box(390,275);
  b5 = new Box(420,275);
  b6 = new Box(450,275);
  b7 = new Box(480,275);
  //level two
  b8 = new Box(330,235);
  b9 = new Box(360,235);
  b10 = new Box(390,235);
  b11 = new Box(420,235);
  b12 = new Box(450,235);
  //level three
  b13 = new Box(360,195);
  b14 = new Box(390,195);
  b15 = new Box(420,195);
  //top
  b16 = new Box(390,155);

  //set 2 for second stand
  //level one
  b17 = new Box(640,175);
  b18 = new Box(670,175);
  b19 = new Box(700,175);
  b20 = new Box(730,175);
  b21 = new Box(760,175);
  //level two
  b22 = new Box(670,135);
  b23 = new Box(700,135);
  b24 = new Box(730,135);
  //top
  b25 = new Box (700,95);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(390,305,250,10);
  ground3=new Ground(700,205,250,10);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,40,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:150,y:170});
}
function draw() {
  background("purple"); 
 
  Engine.update(engine);
  fill("orange")
  textSize(35)
  textFont("signpainter")
  text("Press Space To Get 2nd Chance",300,50);
  fill(135,206,234);
fill("red")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("orange");
  b13.display();
  b14.display();
  b15.display();
  fill("yellow");
  b16.display();
  fill("teal");
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
 fill("turquoise")

  b22.display();
  
  b23.display();
  b24.display();
  fill("aquamarine");
  b25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}