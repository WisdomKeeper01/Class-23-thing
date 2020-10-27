const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;



function setup(){
     createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
   box1 = new Box(width/2-10,250,40,40);
   ground = new Ground(width/2,height-15,width,30)
   box2 = new Box(width/2,200,40,40);

 
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    ground.display()
    box2.display()

    
}