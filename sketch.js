const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ball=new Polygon(200,250,60);

  //creating the blocks
    block1=new Block(570,250);
    block2=new Block(520,250);
    block3=new Block(460,250);
    block4=new Block(400,250);
    //
    block5=new Block(420,150);
    block6=new Block(490,150);
    block7=new Block(545,150);
    block8=new Block(430,100);
    block9=new Block(505,100);
    //
   // block10=new Block(460,50);
   
   block11=new Block(700,100);
   block12=new Block(760,100);
   block13=new Block(820,100);
   block14=new Block(880,100);
   //
   block15=new Block(720,50);
   block16=new Block(780,50);
   block17=new Block(840,50);
   /*block18=new Block(430,100);
   block19=new Block(505,100);*/
  //platforms
    platformG=new Platform(600,485,1200);
    platform1=new Platform(500,400,340);
    platform2=new Platform(800,200,300);
    chain1=new Link(ball.body,{x:200,y:200});
  }

function draw(){
  background(0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    //block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    /*block18.display();
    block19.display();
*/
    ball.display();
    platformG.display();
    platform1.display();
    platform2.display();
    chain1.display();
    Engine.update(engine);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain1.release();
}
function keyPressed(){
  if(keyCode===32){
    chain1.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x:300,y:300});
  }
}